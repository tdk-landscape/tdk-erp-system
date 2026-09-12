import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'employee-records-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'employee-records-api - hr service' })
})

const port = 4100
console.log(`employee-records-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
