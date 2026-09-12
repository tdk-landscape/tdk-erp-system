import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'opportunity-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'opportunity-api - sales service' })
})

const port = 4306
console.log(`opportunity-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
