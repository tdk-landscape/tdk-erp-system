import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'analytics-portal-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'analytics-portal-api - analytics service' })
})

const port = 4606
console.log(`analytics-portal-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
