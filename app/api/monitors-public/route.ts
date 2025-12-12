import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' }, 
        { status: 400 }
      )
    }

    // Basic URL validation
    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' }, 
        { status: 400 }
      )
    }

    // Forward to your actual API
    const response = await fetch('https://api1.bareuptime.co/monitors-public', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      id: data.id || 'created',
      message: 'Monitor created successfully',
      url: url
    })

  } catch (error) {
    console.error('Monitor creation error:', error)
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create monitor. Please try again.' 
      }, 
      { status: 500 }
    )
  }
}