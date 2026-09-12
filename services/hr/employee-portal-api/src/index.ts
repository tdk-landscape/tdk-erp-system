import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'employee-portal-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'employee-portal-api - hr service' })
})

const port = 4110
console.log(`employee-portal-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
