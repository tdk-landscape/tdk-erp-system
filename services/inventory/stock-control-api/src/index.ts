import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'stock-control-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'stock-control-api - inventory service' })
})

const port = 4202
console.log(`stock-control-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
