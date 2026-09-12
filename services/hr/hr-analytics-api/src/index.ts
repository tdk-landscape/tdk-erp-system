import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'hr-analytics-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'hr-analytics-api - hr service' })
})

const port = 4111
console.log(`hr-analytics-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
