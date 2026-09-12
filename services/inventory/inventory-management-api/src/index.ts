import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-management-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-management-api - inventory service' })
})

const port = 4200
console.log(`inventory-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
