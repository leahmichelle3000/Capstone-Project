import app from './app.js'
const port = 3003
app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`)
    console.log(`Documentation located at https://localhost:${port}/api-docs`)
})