import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sales-automation-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'sales-automation-api - sales service' })
})

const port = 4312
console.log(`sales-automation-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
