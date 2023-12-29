import { test } from '@japa/runner'

test.group('Criar favoritos', () => {
    test('criar favorito', async ({client})=> {
      const resposta=await client.post('/favorito').json(
        {nome:'IFRN',
        url:'ww.ifrn.edu.br', 
        importante:false
      })
      resposta.assertStatus(201)
      resposta.assertBodyContains({nome:"IFRN"})
    })
     test ('criar favorito com campo faltante', )
  })
 
