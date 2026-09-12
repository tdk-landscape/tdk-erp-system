import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'expense-management-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'expense-management-api - finance service' })
})

const port = 4015
console.log(`expense-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
