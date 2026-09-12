import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'quality-control-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'quality-control-api - manufacturing service' })
})

const port = 4402
console.log(`quality-control-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
