import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'equipment-management-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'equipment-management-api - manufacturing service' })
})

const port = 4410
console.log(`equipment-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
