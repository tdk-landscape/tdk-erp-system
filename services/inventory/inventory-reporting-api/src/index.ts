import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-reporting-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-reporting-api - inventory service' })
})

const port = 4217
console.log(`inventory-reporting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
