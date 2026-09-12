import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'bom-management-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'bom-management-api - manufacturing service' })
})

const port = 4404
console.log(`bom-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
