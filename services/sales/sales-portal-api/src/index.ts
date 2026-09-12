import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sales-portal-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'sales-portal-api - sales service' })
})

const port = 4310
console.log(`sales-portal-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
