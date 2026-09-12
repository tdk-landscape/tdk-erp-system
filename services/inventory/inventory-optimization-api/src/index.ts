import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-optimization-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-optimization-api - inventory service' })
})

const port = 4203
console.log(`inventory-optimization-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
