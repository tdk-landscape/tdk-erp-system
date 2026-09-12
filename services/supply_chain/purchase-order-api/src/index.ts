import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'purchase-order-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'purchase-order-api - supply_chain service' })
})

const port = 4502
console.log(`purchase-order-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
