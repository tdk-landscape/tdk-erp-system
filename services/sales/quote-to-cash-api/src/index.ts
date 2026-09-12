import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'quote-to-cash-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'quote-to-cash-api - sales service' })
})

const port = 4319
console.log(`quote-to-cash-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
