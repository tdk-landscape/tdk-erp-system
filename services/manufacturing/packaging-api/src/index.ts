import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'packaging-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'packaging-api - manufacturing service' })
})

const port = 4412
console.log(`packaging-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
