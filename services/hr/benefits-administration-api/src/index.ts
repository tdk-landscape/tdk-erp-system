import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'benefits-administration-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'benefits-administration-api - hr service' })
})

const port = 4105
console.log(`benefits-administration-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
