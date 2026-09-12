import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'lean-manufacturing-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'lean-manufacturing-api - manufacturing service' })
})

const port = 4409
console.log(`lean-manufacturing-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
