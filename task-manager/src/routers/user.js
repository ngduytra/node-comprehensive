const express = require('express')
const User =  require('../db/user')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer');
const {sendWelComeEmail} = require('../emails/account')

const upload = multer({
    dest: 'avatars',
    limits: {
        fileSize: 900000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload the right format"))
        }
        cb(undefined, true)
    }
})

router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        // await user.save()
        const token = await user.generateAuthToken()
        sendWelComeEmail(user.email, user.name)
        res.status(201).send({token})
    } catch(e) {
        res.status(500).send(e)
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();

        res.send({token})
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token)=>token.token !== req.token)
        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res)=>{
    try {
        req.user.tokens = []
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/me/avartar', upload.single('avatar'), async (req, res)=> {
    try {
        res.send()
    } catch (e) {
        res.status(500).send(e)
    }
}, (error, req, res, next)=> {
    res.status(400).send({error: error.message})
})

router.get('/user/me', auth, async (req, res)=>{
    await req.user.populate('tasks').execPopulate()
    res.send(req.user.tasks)
})



router.patch('/user/me', auth, async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdate = ["name", "password", "email"]
    const isValidOperation = updates.every((update)=> allowedUpdate.includes(update))
    
    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates'})
    }

    try {
        updates.forEach((update)=> req.user[update] = req.body[update])
        await req.user.save()
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true.save, runValidators: true})
        res.status(200).send(req.user)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/user', auth, async (req, res) => {
    try {
        await req.user.remove()

        res.status(200).send(req.user)
    } catch(e) {
        res.status(500).send()
    }
})

module.exports = router