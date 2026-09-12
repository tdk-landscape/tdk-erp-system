import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'compensation-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'compensation-api - hr service' })
})

const port = 4106
console.log(`compensation-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
