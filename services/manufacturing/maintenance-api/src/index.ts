import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'maintenance-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'maintenance-api - manufacturing service' })
})

const port = 4403
console.log(`maintenance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
