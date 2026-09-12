import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'batch-tracking-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'batch-tracking-api - inventory service' })
})

const port = 4213
console.log(`batch-tracking-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
