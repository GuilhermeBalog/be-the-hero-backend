const crypto = require('crypto')

module.exports =  function generateUnicId(){
    return crypto.randomBytes(4).toString('HEX')
}