import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'product-catalog-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'product-catalog-api - inventory service' })
})

const port = 4204
console.log(`product-catalog-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
