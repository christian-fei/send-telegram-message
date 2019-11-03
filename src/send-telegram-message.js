const core = require('@actions/core')
const { sendMessageFor } = require('simple-telegram-message')

async function sendTelegramMessaage () {
  const telegramToken = core.getInput('token')
  const telegramUserId = core.getInput('user_id')
  const telegramMessage = core.getInput('message')

  return sendMessageFor(telegramToken, telegramUserId)(telegramMessage)
}

sendTelegramMessaage()
  .then(
    result => {
      console.log(`Sent telegram message ${JSON.stringify(result)}`)
    },
    err => {
      console.log(err)
    }
  )
  .then(() => {
    process.exit()
  })
