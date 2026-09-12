import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'deal-management-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'deal-management-api - sales service' })
})

const port = 4317
console.log(`deal-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
