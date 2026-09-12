import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'expiry-management-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'expiry-management-api - inventory service' })
})

const port = 4214
console.log(`expiry-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
