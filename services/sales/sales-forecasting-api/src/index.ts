import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/health', (c) => {
  return c.json({ status: 'healthy', service: 'sales-forecasting-api', domain: 'sales' })
})

app.get('/', (c) => {
  return c.json({ message: 'sales-forecasting-api - sales service' })
})

const port = 4304
console.log(`sales-forecasting-api running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
