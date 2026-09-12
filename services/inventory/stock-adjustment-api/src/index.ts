import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'stock-adjustment-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'stock-adjustment-api - inventory service' })
})

const port = 4216
console.log(`stock-adjustment-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
