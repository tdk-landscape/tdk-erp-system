import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'shipping-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'shipping-api - supply_chain service' })
})

const port = 4508
console.log(`shipping-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
