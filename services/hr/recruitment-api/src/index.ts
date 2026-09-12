import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'recruitment-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'recruitment-api - hr service' })
})

const port = 4101
console.log(`recruitment-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
