import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'payment-processing-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'payment-processing-api - sales service' })
})

const port = 4315
console.log(`payment-processing-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
