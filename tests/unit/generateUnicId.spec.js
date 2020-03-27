const generateUnicId = require('../../src/utils/generateUnicId')

describe('Generate Unic ID', () => {
    it('should generate an unique ID with 8 lenght', () => {
        const id = generateUnicId()

        expect(id).toHaveLength(8)
    })
})