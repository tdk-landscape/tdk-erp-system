import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'pricing-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'pricing-api - sales service' })
})

const port = 4303
console.log(`pricing-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
