import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'territory-management-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'territory-management-api - sales service' })
})

const port = 4309
console.log(`territory-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
