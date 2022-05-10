const supertest= require('supertest')
const app=  require('../src/app')

describe('Teste dos Endpoints', () => {

    
    it('(find categories)', async  () =>{
        const response=  await supertest(app).get('/category')
        expect(response.statusCode).toEqual(200)
    })

    it('(create category)', async  () =>{
        const response=  await supertest(app).post('/category').send({
            id:6,
            name:"TC"
        })
        expect(response.statusCode).toEqual(201)
    })

    it('(findById category)', async  () =>{
        const response=  await supertest(app).get('/category/6')
        expect(response.statusCode).toEqual(200)
    })

    it('(remove category)', async  () =>{
        const response=  await supertest(app).delete('/category/6')
        expect(response.statusCode).toEqual(200)
    })

    it('(find devices)', async  () =>{
        const response=  await supertest(app).get('/device')
        expect(response.statusCode).toEqual(200)
    })

    it('(create device)', async  () =>{
        const response=  await supertest(app).post('/device').send({
            id:2,
            categoryId:1,
            color:"BLUE",
            partnumber:2598
        })
        expect(response.statusCode).toEqual(201)
    })

    it('(findById device)', async  () =>{
        const response=  await supertest(app).get('/device/2')
        expect(response.statusCode).toEqual(200)
    })


    it('(remove device)', async  () =>{
        const response=  await supertest(app).delete('/device/2')
        expect(response.statusCode).toEqual(200)
    })
})

