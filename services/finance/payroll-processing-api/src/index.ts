import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'payroll-processing-api', domain: 'finance' })
})

app.get('/', (c) => {
  return c.json({ message: 'payroll-processing-api - finance service' })
})

const port = 4021
console.log(`payroll-processing-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
