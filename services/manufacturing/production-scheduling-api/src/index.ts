import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'production-scheduling-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'production-scheduling-api - manufacturing service' })
})

const port = 4401
console.log(`production-scheduling-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
