import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sku-management-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'sku-management-api - inventory service' })
})

const port = 4205
console.log(`sku-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
