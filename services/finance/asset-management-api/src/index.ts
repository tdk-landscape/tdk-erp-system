import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'asset-management-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'asset-management-api - finance service' })
})

const port = 4017
console.log(`asset-management-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
