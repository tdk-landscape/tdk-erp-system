import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'general-ledger-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'general-ledger-api - finance service' })
})

const port = 4010
console.log(`general-ledger-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
