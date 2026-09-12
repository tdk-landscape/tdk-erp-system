import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'production-costing-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'production-costing-api - manufacturing service' })
})

const port = 4413
console.log(`production-costing-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
