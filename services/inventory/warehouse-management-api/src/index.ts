import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'warehouse-management-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'warehouse-management-api - inventory service' })
})

const port = 4201
console.log(`warehouse-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
