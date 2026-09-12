import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'accounts-receivable-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'accounts-receivable-api - finance service' })
})

const port = 4012
console.log(`accounts-receivable-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
