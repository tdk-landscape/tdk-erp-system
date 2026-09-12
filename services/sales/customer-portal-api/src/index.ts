import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'customer-portal-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'customer-portal-api - sales service' })
})

const port = 4313
console.log(`customer-portal-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
