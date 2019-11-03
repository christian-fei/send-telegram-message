# send-telegram-message

Send a telegram message to a specified `user_id` on GitHub Actions!

## Requirements

- telegram token (obtain it through BotFather)
- telegram user id (the telegram user or channel id)
- a message string to send

Add it to your workflow:

    - uses: christian-fei/send-telegram-message@v1
      with:
        token: "${{ secrets.TELEGRAM_TOKEN }}"
        user_id: "${{ secrets.TELEGRAM_USER_ID }}"
        message: "https://example.com deployed! 🚀"

