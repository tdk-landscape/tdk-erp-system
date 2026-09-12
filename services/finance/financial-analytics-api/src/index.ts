import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'financial-analytics-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'financial-analytics-api - finance service' })
})

const port = 4020
console.log(`financial-analytics-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
