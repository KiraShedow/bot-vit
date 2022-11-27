const TelegramBot = require('node-telegram-bot-api');
const token = '5832494129:AAEz8AQ3jq7sHcE_uWoykfLZbyvq7jHS6qQ';
const webAppUrl = 'https://sateduc.com/CRYPTOBASE_TRADING';

const bot = new TelegramBot(token, { polling: true })

const oneStart = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Запуск систем'}
    ])
}
oneStart()



function startingBot(){
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;

        if(text === '/start@botisiambot' || '/start'){
            const adv_help =  {
                reply_markup: {
                      inline_keyboard: [
                        [
                          {
                            text: "Поддержка",
                            url: "https://t.me/Nika4357",
                          },  
                        ],
                        [
                            {
                              text: "Получить доступ в платный канал",
                              url: "https://t.me/purchasing_a_subscription_bot",
                            },
                          ]
                      ],  
                    }, 
                   parse_mode: 'HTML'
                }
                async function helloInformMessage(){
                    await bot.sendPhoto(chatId, './img/ava.png');
                    await bot.sendMessage(chatId, `<b><i> Приветственное сообщение  </i></b>`,  adv_help);
                }
                helloInformMessage()
    
    
                // setInterval( async () => {
                //     await bot.sendPhoto(msg.chat.id, './img/ava.png');
                //    await  bot.sendMessage(msg.chat.id, `<b><i> Приветственное сообщение </i></b>`,  adv_help);
                // }, 3600000)
        }  
    })
}
startingBot()

// function bodyMessage (){
//     bot.on('callback_query', async msg => {
//         const data = msg.data;
//         const chatId = msg.message.chat.id;

//         const goRun = 'go';

    
//     })
// }
// bodyMessage()


// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;

    // if(text === '/start'){
    //     await bot.sendMessage(chatId, 'заходи в наш магазин по кнопке ниже ', {
    //         reply_markup: {
    //             inline_keyboard: [
    //                 [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
    //             ]
    //         }
    //     })
    // }

//     if(msg?.web_app_data?.data){
//         try {
//             const data = JSON.parse(msg?.web_app_data?.data);

//             await bot.sendMessage(chatId, 'Спасибо за заявку')
//             await bot.sendMessage(chatId, 'Ваша страна ' + data?.country);
//             await bot.sendMessage(chatId, 'Ваша улица ' + data?.street);

//             setTimeout( async () => {
//                 await bot.sendMessage(chatId, 'Мы уже выезжаем за вами');
//             }, 3000)
//         } catch (e) {
//             console.log(e);
//         }
//     }
// });