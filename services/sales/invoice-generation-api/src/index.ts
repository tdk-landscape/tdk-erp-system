import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'invoice-generation-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'invoice-generation-api - sales service' })
})

const port = 4314
console.log(`invoice-generation-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
