import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'time-tracking-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'time-tracking-api - hr service' })
})

const port = 4104
console.log(`time-tracking-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
