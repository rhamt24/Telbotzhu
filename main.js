require("dotenv").config()
const Zhubot = require("./app/Zhubot")

const token = process.env.7013609557:AAGx7I763NVychZq3Tl_aNfhRJx0ETyKrMw
const options = {
    polling: true
}

console.log("starting Zhubot...")
const Zhubot = new Zhubot(token, options)

const main = () => {
    console.log("checking feature...")
    Zhubot.getHelp()
    Zhubot.getSticker()
    Zhubot.getGreeting()
    Zhubot.getFollow()
    Zhubot.getQuotes()
    Zhubot.getNews()
    Zhubot.getQuake()
    console.log('feature ready!')
}
main()
console.log("bot is ready now!")