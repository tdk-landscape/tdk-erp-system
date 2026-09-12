import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'crm-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'crm-api - sales service' })
})

const port = 4300
console.log(`crm-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
