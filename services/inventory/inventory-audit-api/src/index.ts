import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'inventory-audit-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'inventory-audit-api - inventory service' })
})

const port = 4210
console.log(`inventory-audit-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
