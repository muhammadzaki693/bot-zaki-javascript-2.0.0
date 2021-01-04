module.exports = {
  name: 'bal',
  description: "gets the balance of a user",
  execute(message, args, db, Discord, prefix) {

    if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using \`${prefix}startgame\``)
    }

    else {

    let bal = db.get(`user_${message.author.id}.bal`)
    let xp = db.get(`user_${message.author.id}.xp`)
    let weapon = db.get(`user_${message.author.id}.inv.weapon`)

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}\'s Balance`)
    .setDescription(`${bal} coins\n${xp} xp\n${weapon} weapon`)
    .setColor("GREEN")
    .setTimestamp()

    message.channel.send(embed)

    }

  }
}