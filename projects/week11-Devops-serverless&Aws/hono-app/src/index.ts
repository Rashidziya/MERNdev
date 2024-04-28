import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/post',(c)=>{
  return c.json({
    message:"hello from hono post route"
  });
})

export default app
