const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate(value) {
            if(value==='Nguyen Thuy Quynh') {
                throw new Error('Name is invalid')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        validate(value) {
            if(validator.isEmail(value) === false) {
                throw new Error('Email is not valid')
            }
        }
    },
    
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
    },
    tokens: [{
        token: {
            type: String,
        }
    }]
}, {
    timestamps: true
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
} 

userSchema.methods.generateAuthToken = async function() {
    const user = this

    const token = await jwt.sign({id:user._id}, 'Tra1998765tra')

    user.tokens = user.tokens.concat({token})

    await user.save()

    return token
} 

userSchema.statics.findByCredentials = async(email, pass)=>{
    const user = await User.findOne({email})
    if(!user) {
        throw new Error("Unable to login")
    }

    const isMatch = await bcrypt.compare(pass, user.password)
    if(isMatch) {
        return user
    }
    throw new Error('Unable to login')
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

//Delete 
userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;