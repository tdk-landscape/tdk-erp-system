import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'work-order-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'work-order-api - manufacturing service' })
})

const port = 4405
console.log(`work-order-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
