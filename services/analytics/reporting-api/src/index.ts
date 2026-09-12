import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'reporting-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'reporting-api - analytics service' })
})

const port = 4602
console.log(`reporting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
