const TelegramBot = require('node-telegram-bot-api');
const token = '5602831261:AAE_UMZma-_c1UzhZLcUSpNOtfGit5yLX3M';
const webAppUrl = 'https://fipodique.beget.app/';

const bot = new TelegramBot(token, { polling: true });

const buttonActiveOne = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '🚀 ОФОРМИТЬ ПОДПИСКУ 🚀', web_app: { url: webAppUrl } }]
        ]
    })
}

function started(){
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
    
        if (text === '/start') {
            await bot.sendPhoto(chatId, 'img/messageOne.jpeg')
            await bot.sendMessage(chatId, 'Здраствуйте!\nДля того что б перейти в чат, нажмите \nна кнопку ниже  и оплатите подписку \n\n                          ⬇️ ⬇️ ⬇️', buttonActiveOne)
        }
    })
}
started()
