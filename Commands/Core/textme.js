const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "textme",
    alias: ["msgme"],
    desc: "Developer Number.",
    react: "🤙",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        XeonBotInc.sendContact(m.chat, ownernum, m)
    }
}

