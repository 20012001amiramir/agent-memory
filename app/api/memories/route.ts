import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not configured. API will run in demo mode.');
}

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// In-memory store for demo mode
const demoStore = new Map<string, any>();

export async function POST(request: NextRequest) {
  try {
    const apiKey = request.headers.get('X-API-Key');
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }

    const body = await request.json();
    const { namespace, key, value } = body;

    if (!namespace || !key || value === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (supabase) {
      // Production mode with Supabase
      const { data, error } = await supabase
        .from('memories')
        .upsert({
          namespace,
          key,
          value,
          api_key: apiKey,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'namespace,key,api_key'
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: 'Failed to store memory' }, { status: 500 });
      }

      return NextResponse.json({ 
        success: true, 
        memory: {
          namespace: data.namespace,
          key: data.key,
          value: data.value,
          updated_at: data.updated_at
        }
      });
    } else {
      // Demo mode with in-memory store
      const memoryKey = `${apiKey}:${namespace}:${key}`;
      const memory = {
        namespace,
        key,
        value,
        updated_at: new Date().toISOString()
      };
      demoStore.set(memoryKey, memory);
      
      return NextResponse.json({ 
        success: true, 
        memory,
        demo_mode: true
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const apiKey = request.headers.get('X-API-Key');
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const namespace = searchParams.get('namespace');
    const key = searchParams.get('key');

    if (!namespace || !key) {
      return NextResponse.json({ error: 'Missing namespace or key' }, { status: 400 });
    }

    if (supabase) {
      // Production mode with Supabase
      const { data, error } = await supabase
        .from('memories')
        .select('namespace, key, value, updated_at')
        .eq('api_key', apiKey)
        .eq('namespace', namespace)
        .eq('key', key)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return NextResponse.json({ error: 'Memory not found' }, { status: 404 });
        }
        console.error('Supabase error:', error);
        return NextResponse.json({ error: 'Failed to retrieve memory' }, { status: 500 });
      }

      return NextResponse.json({ memory: data });
    } else {
      // Demo mode with in-memory store
      const memoryKey = `${apiKey}:${namespace}:${key}`;
      const memory = demoStore.get(memoryKey);
      
      if (!memory) {
        return NextResponse.json({ error: 'Memory not found' }, { status: 404 });
      }
      
      return NextResponse.json({ 
        memory,
        demo_mode: true
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
