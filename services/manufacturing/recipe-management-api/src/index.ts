import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'recipe-management-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'recipe-management-api - manufacturing service' })
})

const port = 4411
console.log(`recipe-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
