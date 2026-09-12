import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'compliance-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'compliance-api - hr service' })
})

const port = 4108
console.log(`compliance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
