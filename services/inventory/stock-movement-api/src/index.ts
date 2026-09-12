import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'stock-movement-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'stock-movement-api - inventory service' })
})

const port = 4207
console.log(`stock-movement-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
