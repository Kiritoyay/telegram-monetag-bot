const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "COLOQUE_AQUI_O_TOKEN_DO_SEU_BOT";

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🌱 Bem-vindo ao Farm Dark!\n\nClique em ▶️ PLAY para começar.",
    {
      reply_markup: {
        keyboard: [
          ["▶️ PLAY"]
        ],
        resize_keyboard: true
      }
    }
  );
});

bot.on("message", (msg) => {
  if (msg.text === "▶️ PLAY") {
    bot.sendMessage(
      msg.chat.id,
      "⚡ Energia: 1000/1000\n🌱 Sua fazenda está pronta!\n\nEm breve vamos adicionar o plantio e os anúncios."
    );
  }
});
