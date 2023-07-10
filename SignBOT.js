import * as CronJob from 'node-cron'

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

const TOKEN = "$$$$";



client.on("ready", async () => {
    console.log("Bot en ligne !");
   client.user.setPresence({
  activities: [{ name: `vos signatures`, type: ActivityType.Watching,}],
  status: 'idle',
});

    let scheduledSignMessage = CronJob.schedule("00 00 10 * * 1-5", () => {
          const guild = client.guilds.cache.get("1113021448206950450");
          const channel = guild.channels.cache.get("1123519967753674773");
            channel.send(
              `
@everyone

https://tenor.com/view/lol-crazy-alerte-garrison-south-park-gif-14631935


**Pensez à signer bande de cons !**

https://sign.m2iformation.fr/signin`)
            })

    scheduledSignMessage.start()





    let scheduledSecondSignMessage = CronJob.schedule("00 00 14 * * 1-5", () => {
      const guild = client.guilds.cache.get("1113021448206950450");
      const channel = guild.channels.cache.get("1123519967753674773");
        channel.send(
          `
@everyone

https://tenor.com/view/lol-crazy-alerte-garrison-south-park-gif-14631935
    
    
**Bon les débilos là faut signer vous avez encore oubliez, faites un efforts un peu !**
*Mathieu continue à faire chier Julian stp il adore ça*

https://sign.m2iformation.fr/signin`)
        
})
    
scheduledSecondSignMessage.start()










	}
)





 client.login(TOKEN)
