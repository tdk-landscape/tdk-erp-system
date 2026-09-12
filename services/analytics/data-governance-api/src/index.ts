import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'data-governance-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'data-governance-api - analytics service' })
})

const port = 4604
console.log(`data-governance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
