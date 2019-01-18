const express = require('express')
const app = express()
const port = 4553

app.get('/:name', (req, res) => res.send(`Hello ${req.params.name}, how are you today?`))

app.listen(port, () => console.log(`Hellp app listening on port ${port}!`))
