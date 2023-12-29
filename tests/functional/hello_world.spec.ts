import { test } from '@japa/runner'

test('nome do app'), async ({ client }) => {
  const resposta = await client.get('/');
  resposta.assertStatus(200);
  resposta.assertBodyContains({ app: 'favio-back' });
};

  