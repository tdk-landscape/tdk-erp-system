import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sales-performance-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'sales-performance-api - sales service' })
})

const port = 4318
console.log(`sales-performance-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
