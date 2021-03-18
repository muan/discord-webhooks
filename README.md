# Discord Webhooks

Just Heroku for now. 


## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmuan%2Fdiscord-webhooks)

## Heroku

1. Deploy app and remember your `<app-url>`
2. Create webhook for channel on Discord and copy `<webhook-url>`
3. Create webhook on Heroku and use `https://<app-url>/api/heroku?discord=<webhook-url>` as the URL.

Fror example:

`https://very-cool-app.vercel.app/api/heroku?discord=https://discord.com/api/webhooks/00000/IOIO_Yawl7n1sOAHQ3U1`

