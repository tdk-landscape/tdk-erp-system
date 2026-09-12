import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'audit-trail-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'audit-trail-api - finance service' })
})

const port = 4024
console.log(`audit-trail-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
