const express = require('express');
const body_parser = require('body-parser');
const morgan= require('morgan')
const multer= require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();



let port = process.env.PORT || 3000
app.use(morgan('dev'))
app.use(body_parser.json());

app.get('/',(req,res)=> {
    res.sendFile(__dirname+"/index.html")
})


app.post('/filehandler',upload.single('file'),(req,res)=> {
    console.log(req.file)
    res.send({"file size":req.file.size})
})


app.listen(port,()=> {
    console.log("listening on port ",port)
})