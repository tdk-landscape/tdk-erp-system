import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'dashboard-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'dashboard-api - analytics service' })
})

const port = 4605
console.log(`dashboard-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
