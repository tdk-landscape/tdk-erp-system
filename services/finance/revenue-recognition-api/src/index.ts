import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'revenue-recognition-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'revenue-recognition-api - finance service' })
})

const port = 4023
console.log(`revenue-recognition-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
