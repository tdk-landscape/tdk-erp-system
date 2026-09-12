import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-reservation-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-reservation-api - inventory service' })
})

const port = 4215
console.log(`inventory-reservation-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
