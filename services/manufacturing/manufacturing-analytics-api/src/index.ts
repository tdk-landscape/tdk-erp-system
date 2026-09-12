import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'manufacturing-analytics-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'manufacturing-analytics-api - manufacturing service' })
})

const port = 4414
console.log(`manufacturing-analytics-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
