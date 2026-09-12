import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'production-planning-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'production-planning-api - manufacturing service' })
})

const port = 4400
console.log(`production-planning-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
