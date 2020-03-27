const connection = require('../database/connection')
const crypto = require('crypto')

const generateUnicId = require('../utils/generateUnicId')

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*')

        return response.json(ongs)
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body

        const id = generateUnicId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id })
    }
}