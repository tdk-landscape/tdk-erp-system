import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'multi-location-api', domain: 'inventory' })
})

app.get('/', (c) => {
  return c.json({ message: 'multi-location-api - inventory service' })
})

const port = 4211
console.log(`multi-location-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
