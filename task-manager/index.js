const express = require('express');
const multer = require('multer');
require('./src/db/mongoose');

const userRouter = require('./src/routers/user')
const taskRouter = require('./src/routers/task')

const app = express();

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 900000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res)=> {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
})


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`The is runing in port ${process.env.PORT}`);
})
