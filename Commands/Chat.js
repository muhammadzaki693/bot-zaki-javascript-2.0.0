const { chatBot } = require('reconlx') 

module.exports = {
    name : 'chat',
    execute(client, message, args) {
        chatBot(message, args.join(" "))
    }
}