import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'capacity-planning-api', domain: 'manufacturing' })
})

app.get('/', (c) => {
  return c.json({ message: 'capacity-planning-api - manufacturing service' })
})

const port = 4407
console.log(`capacity-planning-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
