import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'machine-learning-api', domain: 'analytics' })
})

app.get('/', (c) => {
  return c.json({ message: 'machine-learning-api - analytics service' })
})

const port = 4607
console.log(`machine-learning-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
