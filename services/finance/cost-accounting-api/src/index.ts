import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'cost-accounting-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'cost-accounting-api - finance service' })
})

const port = 4022
console.log(`cost-accounting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
