import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'vendor-portal-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'vendor-portal-api - supply_chain service' })
})

const port = 4505
console.log(`vendor-portal-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
