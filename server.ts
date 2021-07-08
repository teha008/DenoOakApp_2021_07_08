import { Application } from 'https://deno.land/x/oak@v5.4.0/mod.ts'
import router from './routes.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`5000번 포트 서버 정상 작동`)
await app.listen({ port: 5000 })
