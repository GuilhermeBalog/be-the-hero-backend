const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send({ name: 'Guilherme', age: 17 })
})

const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log(`> Server listening on port ${port}...`)
}) 