import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'onboarding-api', domain: 'hr' })
})

app.get('/', (c) => {
  return c.json({ message: 'onboarding-api - hr service' })
})

const port = 4102
console.log(`onboarding-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
