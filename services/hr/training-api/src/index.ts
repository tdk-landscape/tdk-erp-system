import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'training-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'training-api - hr service' })
})

const port = 4107
console.log(`training-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
