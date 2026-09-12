import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'order-management-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'order-management-api - sales service' })
})

const port = 4301
console.log(`order-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
