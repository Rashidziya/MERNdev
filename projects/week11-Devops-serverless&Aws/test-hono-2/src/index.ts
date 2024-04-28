import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/signin",(c)=>{
  return c.text("hello world from signin Routes ");
})

export default app
