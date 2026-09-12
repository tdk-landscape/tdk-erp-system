import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'cash-management-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'cash-management-api - finance service' })
})

const port = 4018
console.log(`cash-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
