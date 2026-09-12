import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'contract-management-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'contract-management-api - sales service' })
})

const port = 4311
console.log(`contract-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
