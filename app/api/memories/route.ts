import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// POST /api/memories - Store memory
export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const { namespace = 'default', key, value, ttl } = await request.json()
    
    if (!key || !value) {
      return NextResponse.json({ error: 'key and value required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('memories')
      .upsert({
        api_key: apiKey,
        namespace,
        key,
        value,
        ttl: ttl ? new Date(Date.now() + ttl * 1000).toISOString() : null,
        updated_at: new Date().toISOString()
      })
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// GET /api/memories - Retrieve or search
export async function GET(request: NextRequest) {
  try {
    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    const q = searchParams.get('q')
    const namespace = searchParams.get('namespace') || 'default'
    
    if (key) {
      // Get specific memory
      const { data, error } = await supabase
        .from('memories')
        .select('*')
        .eq('api_key', apiKey)
        .eq('namespace', namespace)
        .eq('key', key)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return NextResponse.json({ data: data || null })
    } else if (q) {
      // Search memories (simple contains for MVP)
      const { data, error } = await supabase
        .from('memories')
        .select('*')
        .eq('api_key', apiKey)
        .eq('namespace', namespace)
        .ilike('value', `%${q}%`)
        .limit(20)
      
      if (error) throw error
      return NextResponse.json({ data })
    } else {
      // List all memories in namespace
      const { data, error } = await supabase
        .from('memories')
        .select('*')
        .eq('api_key', apiKey)
        .eq('namespace', namespace)
        .limit(100)
      
      if (error) throw error
      return NextResponse.json({ data })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE /api/memories - Delete memory
export async function DELETE(request: NextRequest) {
  try {
    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    const namespace = searchParams.get('namespace') || 'default'
    
    if (!key) {
      return NextResponse.json({ error: 'key required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('memories')
      .delete()
      .eq('api_key', apiKey)
      .eq('namespace', namespace)
      .eq('key', key)
    
    if (error) throw error
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
