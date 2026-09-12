import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'predictive-analytics-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'predictive-analytics-api - analytics service' })
})

const port = 4603
console.log(`predictive-analytics-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
