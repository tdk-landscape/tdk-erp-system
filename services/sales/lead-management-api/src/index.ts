import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'lead-management-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'lead-management-api - sales service' })
})

const port = 4305
console.log(`lead-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
