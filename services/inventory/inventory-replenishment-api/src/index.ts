import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-replenishment-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-replenishment-api - inventory service' })
})

const port = 4212
console.log(`inventory-replenishment-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
