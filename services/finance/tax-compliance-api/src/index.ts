import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'tax-compliance-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'tax-compliance-api - finance service' })
})

const port = 4016
console.log(`tax-compliance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
