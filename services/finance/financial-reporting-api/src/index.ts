import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'financial-reporting-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'financial-reporting-api - finance service' })
})

const port = 4014
console.log(`financial-reporting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
