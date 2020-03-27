const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async() => {
        await connection.destroy()
    })

    it('should be able to create a new ONG and an incident for this ONG', async () => {
        const ongPostRresponse = await request(app)
            .post('/ongs')
            .send({
                name: "EcoMar",
                email: "contato@ecomar.com",
                whatsapp: "13900000000",
                city: "Pedro de Toledo",
                uf: "SP"
            })

        expect(ongPostRresponse.body).toHaveProperty('id')
        expect(ongPostRresponse.body.id).toHaveLength(8)

        const incidentPostResponse = await request(app)
            .post('/incidents')
            .set('authorization', ongPostRresponse.body.id)
            .send({
                title: "Cachorro ferido",
                description: "Um foi cachorro ferido hoje",
                value: 90
            })

        expect(incidentPostResponse.body).toHaveProperty('id')
        expect(incidentPostResponse.body.id).toBeGreaterThan(0)
    })
})
