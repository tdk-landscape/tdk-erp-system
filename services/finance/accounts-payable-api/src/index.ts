import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'accounts-payable-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'accounts-payable-api - finance service' })
})

const port = 4011
console.log(`accounts-payable-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
