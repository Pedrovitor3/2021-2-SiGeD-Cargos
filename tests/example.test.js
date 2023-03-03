const request = require('supertest');
const app = require('../src/index');
const jwt = require('jsonwebtoken');

describe('Sample Test', () => {
  let id;
  let idCargo1;
  let idCargo2;
  const cargo = {
    name: Math.random().toString(36).substr(2, 5),
    description: 'cargo teste',
  };

  const cargo1 = {
    name: 'cargo um',
    description: 'cargo número um',
  };

  const cargo2 = {
    name: 'cargo dois',
    description: 'cargo número dois',
  };

  const token = jwt.sign({ name: "Teste", description: "Teste" }, process.env.SECRET, {
    expiresIn: 240,
  });

  beforeAll(async () => {
    resCargo1 = await request(app).post('/role').set('x-access-token', token).send(cargo1);
    resCargo2 = await request(app).post('/role').set('x-access-token', token).send(cargo2);
    idCargo1 = resCargo1.body._id;
    idCargo2 = resCargo2.body._id;
   
  });

  it('App is defined', () => {
    expect(app).toBeDefined();
    
  });

  it('Post role', async () => {
    const res = await request(app).post('/role').set('x-access-token', token).send(cargo);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(cargo.name);
    expect(res.body.description).toBe(cargo.description);
    id = res.body._id;
    
  });


  it('Get a  role', async () => {
    const res = await request(app).get(`/role/${id}`).set('x-access-token', token);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(cargo.name);
    expect(res.body.description).toBe(cargo.description);
    
  });

  it('Put a  role', async () => {
    const res = await request(app).patch(`/role/${id}`).set('x-access-token', token).send(cargo1);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('description');
  });

  it('Find a  role', async () => {
    const res = await request(app).post('/role/query').set('x-access-token', token).send({
      name:"cargo1"
    });
    expect(res.statusCode).toBe(200);

 
  });

  it('Delete a  role', async () => {
    const res = await request(app).delete(`/role/${id}`).set('x-access-token', token);
    expect(res.statusCode).toBe(200);
 
  });


  afterAll(async ()=>{
   await request(app).delete(`/role/${idCargo1}`).set('x-access-token', token);
   await request(app).delete(`/role/${idCargo2}`).set('x-access-token', token);
  })


});

