import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'quoting-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'quoting-api - sales service' })
})

const port = 4302
console.log(`quoting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
