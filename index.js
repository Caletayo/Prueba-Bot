const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('El bot sigue encendido.')
});
 
app.listen(3000, () => {
  console.log('Servidor Listo.');
});

const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone'});

//24/7

const { Player } = require('discord-player');

const player = new Player(client);


setInterval(() => {
  const channel = client.channels.cache.get(process.env.Canal);
  if (!channel) return console.error("No consigo encontrar el canal");
  channel
    .join()
    .then(con => {
      console.log("Trabajando!");
    })
    .catch(e => {
      console.error(e);
    });
}, 3000);

client.on('ready', () => {
  console.log('Estoy listo!');
  });

client.login(process.env.Token)