import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'supplier-management-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'supplier-management-api - supply_chain service' })
})

const port = 4501
console.log(`supplier-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
