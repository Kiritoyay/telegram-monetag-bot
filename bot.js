const TelegramBot = require("node-telegram-bot-api");
const { botToken } = require("./config");

const bot = new TelegramBot(botToken, {
  polling: true
});

let players = {};

bot.onText(/\/start/, (msg) => {

    const id = msg.chat.id;

    if (!players[id]) {
        players[id] = {
            energy: 1000
        };
    }

    bot.sendMessage(
        id,
        `🎮 PLAY GAMER GO

⚡ Energia: ${players[id].energy}/1000

Clique em PLAY para começar.`,
        {
            reply_markup: {
                keyboard: [
                    ["▶️ PLAY"],
                    ["📺 Ver anúncio"]
                ],
                resize_keyboard: true
            }
        }
    );
});

bot.on("message", (msg) => {

    const id = msg.chat.id;

    if (!players[id]) return;

    if (msg.text === "▶️ PLAY") {

        if (players[id].energy >= 100) {

            players[id].energy -= 100;

            bot.sendMessage(
                id,
                `💥 Você clicou!

⚡ Energia: ${players[id].energy}/1000`
            );

        } else {

            bot.sendMessage(
                id,
                "⚠️ Energia insuficiente! Assista a um anúncio."
            );

        }

    }

    if (msg.text === "📺 Ver anúncio") {

        players[id].energy += 10;

        if (players[id].energy > 1000)
            players[id].energy = 1000;

        bot.sendMessage(
            id,
            `✅ +10 Energia!

⚡ Energia: ${players[id].energy}/1000`
        );

    }

});
