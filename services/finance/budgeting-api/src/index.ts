import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'budgeting-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'budgeting-api - finance service' })
})

const port = 4013
console.log(`budgeting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
