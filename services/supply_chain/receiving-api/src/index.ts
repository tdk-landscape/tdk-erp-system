import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'receiving-api', domain: 'supply_chain' })
})

app.get('/', (c) => {
  return c.json({ message: 'receiving-api - supply_chain service' })
})

const port = 4509
console.log(`receiving-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
