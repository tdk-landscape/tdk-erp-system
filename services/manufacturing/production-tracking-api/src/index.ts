import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'production-tracking-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'production-tracking-api - manufacturing service' })
})

const port = 4408
console.log(`production-tracking-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
