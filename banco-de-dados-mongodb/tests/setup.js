const { MongoMemoryServer } = require('mongodb-memory-server');

// Configuração do mongoDB em mémoria para tests
// hooks globais
let mongoServer;
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    process.env.DB_URL = mongoServer.getUri();
});

afterAll(async () => {
    await mongoServer.stop();
})