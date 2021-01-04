module.exports = {
  name: 'work',
  description: "work com",
  execute(message, args, db){
          let randc = Math.floor(Math.random() * (750 - 500) + 500)

      db.add(`user_${message.author.id}.bal`, randc)
      message.channel.send(`you get ${randc} coins bal`)

  }
};