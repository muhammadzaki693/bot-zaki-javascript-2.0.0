module.exports = {
  name: "math",
  description: "performs simple math functions",
  execute(message, args) {
    let op = args[0]
    let no1 = args[1]
    let no2 = args[2]

    let parseNo1 = parseInt(no1)
    let parseNo2 = parseInt(no2)

    let ans

    if (!op) {
      message.reply("You need to enter the operation and operands next to the command as follow: \`!math add 1 2\`")
    }

    else {
      if (op === "+") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math + 1 2\`")
        }
        else {
          ans = parseNo1 + parseNo2
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "-") {
      if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math - 1 2\`")
        }
        else {
          ans = parseNo1 - parseNo2
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "*") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math * 1 2\`")
        }
        else {
          ans = parseNo1 * parseNo2
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "/") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math / 1 2\`")
        }
        else {
          ans = parseNo1 / parseNo2
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "%") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math % 1 2\`")
        }
        else {
          ans = parseNo1 % parseNo2
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "p") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math p 1 2\`")
        }
        else {
          ans = Math.pow(parseNo1, parseNo2)
          message.channel.send("You answer is " + ans)
        }
      }
      else if (op === "r") {
        if (!args[1] || !args[2]) {
          message.reply("You need to enter the operation and operands next to the command as follow: \`!math r 1 2\`")
        }
        else {
          ans = Math.pow(parseNo1, 1/parseNo2)
          message.channel.send("You answer is " + ans)
        }
      }
    }
  }
}