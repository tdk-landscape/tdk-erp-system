import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'procurement-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'procurement-api - supply_chain service' })
})

const port = 4500
console.log(`procurement-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
