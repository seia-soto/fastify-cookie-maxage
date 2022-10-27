import Fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

(async () => {
  const fastify = Fastify()

  fastify.register(fastifyCookie)

  fastify.get('/set', async (_req, reply) => {
    reply.setCookie('test', '1', {
      maxAge: 3600
    })
  })

  const addr = await fastify.listen({
    port: 8080
  })

  console.log(addr)
})()