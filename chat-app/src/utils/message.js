const generateMesssge = (message) => {
    return {
        text: message,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMesssge
}