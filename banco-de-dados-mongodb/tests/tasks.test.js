const request = require('supertest');
const app = require('../server');
const Task = require('../models/Task');

describe('GET /tasks', () => {
  it('deve retornar todas as tarefas', async () => {
    // Pré-popula o banco de testes
    await Task.create({ title: 'Teste 1', done: false });

    const response = await request(app)
      .get('/tasks')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0].title).toBe('Teste 1');
  });
});


// Testando autenticação
describe('POST /login', () => {
  it('deve retornar token com credenciais válidas', async () => {
    await User.create({ email: 'test@test.com', password: '123456' });

    const response = await request(app)
      .post('/login')
      .send({ email: 'test@test.com', password: '123456' })
      .expect(200);

    expect(response.body.token).toBeDefined();
  });
});

// Mockando serviços externos
jest.mock('../services/externalApi', () => ({
  fetchData: jest.fn(() => Promise.resolve({ fake: 'data' }))
}));

// Testando Erros
it('deve retornar 400 se o título estiver faltando', async () => {
  await request(app)
    .post('/tasks')
    .send({ done: false })
    .expect(400);
});