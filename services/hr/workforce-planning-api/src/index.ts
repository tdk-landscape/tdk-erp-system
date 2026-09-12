import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'workforce-planning-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'workforce-planning-api - hr service' })
})

const port = 4109
console.log(`workforce-planning-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
