import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'supplier-performance-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'supplier-performance-api - supply_chain service' })
})

const port = 4510
console.log(`supplier-performance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
