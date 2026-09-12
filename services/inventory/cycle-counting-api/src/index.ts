import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'cycle-counting-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'cycle-counting-api - inventory service' })
})

const port = 4209
console.log(`cycle-counting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
