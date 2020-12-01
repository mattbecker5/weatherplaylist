const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    console.log("hit /");
    res.send('Hello World!')
})

app.post('/spotify', (req, res) => {
    console.log("hit route");
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`spotify-api listening at http://localhost:${port}`)
})
