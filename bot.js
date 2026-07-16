bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        "🎮 Bem-vindo ao PLAY GAMER GO!",
        {
            reply_markup: {
                inline_keyboard: [[
                    {
                        text: "▶️ Abrir Jogo",
                        web_app: {
                            url: "https://telegram-monetag-bot.onrender.com"
                        }
                    }
                ]]
            }
        }
    );
});
