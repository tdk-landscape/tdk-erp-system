import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-valuation-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-valuation-api - inventory service' })
})

const port = 4208
console.log(`inventory-valuation-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
