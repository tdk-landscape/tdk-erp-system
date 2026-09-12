import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'data-warehouse-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'data-warehouse-api - analytics service' })
})

const port = 4601
console.log(`data-warehouse-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
