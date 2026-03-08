import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const { namespace, key, value, ttl } = await request.json()
    
    if (!key || !value) {
      return NextResponse.json({ error: 'key and value required' }, { status: 400 })
    }
    
    const { data, error } = await supabase
      .from('memories')
      .upsert({
        api_key: apiKey,
        namespace: namespace || 'default',
        key,
        value,
        ttl: ttl ? new Date(Date.now() + ttl * 1000).toISOString() : null
      })
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key')
  if (!apiKey) {
    return NextResponse.json({ error: 'API key required' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  const q = searchParams.get('q')
  const namespace = searchParams.get('namespace') || 'default'
  
  try {
    if (key) {
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
      const { data, error } = await supabase
        .from('memories')
        .select('*')
        .eq('api_key', apiKey)
        .eq('namespace', namespace)
        .textSearch('value', q)
        .limit(10)
      
      if (error) throw error
      return NextResponse.json({ data })
    } else {
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
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}
