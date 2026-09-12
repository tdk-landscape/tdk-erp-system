import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-forecasting-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-forecasting-api - inventory service' })
})

const port = 4206
console.log(`inventory-forecasting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
