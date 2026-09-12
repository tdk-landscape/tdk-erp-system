import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'demand-planning-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'demand-planning-api - supply_chain service' })
})

const port = 4506
console.log(`demand-planning-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
