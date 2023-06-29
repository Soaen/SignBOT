import { CronJob } from 'cron';

import {
    Client,
    GatewayIntentBits,
    ActivityType,
  } from 'discord.js';

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

const TOKEN = "MTEyMzUxMzIzOTM0NzY3MTA2MA.G1BlRF.zrdXrhatdL-c9u3GMNZR5ZdZi5yVFDSYGP-0uQ";

client.on("ready", async () => {
    console.log("Bot Opérationnel");
   client.user.setPresence({
  activities: [{ name: `vos signatures`, type: ActivityType.Watching }],
  status: 'dnd',
});

    let scheduledSignMessage = new CronJob("00 00 10,14 * * *", () => {
          const guild = client.guilds.cache.get("1113021448206950450");
          const channel = guild.channels.cache.get("1123519967753674773");
            channel.send(
              `
https://tenor.com/view/lol-crazy-alerte-garrison-south-park-gif-14631935


Pensez à signer bande de gogole!
https://sign.m2iformation.fr/signin`)
            })

    scheduledSignMessage.start()

	}
)
 client.login(TOKEN)