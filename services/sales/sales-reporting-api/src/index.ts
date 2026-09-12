import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sales-reporting-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'sales-reporting-api - sales service' })
})

const port = 4316
console.log(`sales-reporting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
