const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '194549d3a7ec4b7db4291391bc51e8da',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get('/', (req, res) => {
    rollbar.log("Someone loaded up your html!")
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/css', (req, res) => {
    rollbar.log("Someone loaded your css")
    res.sendFile(path.join(__dirname, '../index.css'))
    try{
        pictureLink()
    }catch(warning){
        rollbar.warning("Link unavailable")
    }
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
    try{ 
        nonExistentFunction();
    }catch(error){
        rollbar.error(error)
    }
    try{
        buttonAlert()
    }catch(critical){
        rollbar.critical("No sound plays")
    }
})

const port = process.env.PORT || 4444

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})