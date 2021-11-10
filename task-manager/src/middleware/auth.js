const jwt = require('jsonwebtoken')
const User = require('../db/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ',  '')
        const decoded = jwt.verify(token, 'Tra1998765tra')
        const user = await User.findOne({_id: decoded.id, 'tokens.token': token})
        if(!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send('Unable to access')
    }
}

module.exports = auth