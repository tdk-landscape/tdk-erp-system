import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'business-intelligence-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'business-intelligence-api - analytics service' })
})

const port = 4600
console.log(`business-intelligence-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
