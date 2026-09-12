import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'performance-management-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'performance-management-api - hr service' })
})

const port = 4103
console.log(`performance-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
