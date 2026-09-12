import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'shop-floor-control-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'shop-floor-control-api - manufacturing service' })
})

const port = 4406
console.log(`shop-floor-control-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
