// middleware.tsx
import { NextRequest } from 'next/server'
import { MiddlewareRequest } from '@netlify/next'

export async function middleware(req: NextRequest) {
  const {geo} = req
  const country = geo?.country || ''

  const request = new MiddlewareRequest(req)
  const response = await request.next()
  
  if (country === 'CA') {
    const message = 'Hello Canada! Use promo code CANADA50 for 50% off your order!'
    
    response.replaceText('#banner', message)
    response.setPageProp('banner', message)
  }

  return response
}
