# Mathbot
A Discord bot that does simple math.

Mathbot requires you to host your own instance, since I currently don't have the money to host it on a webserver 24/7.

## Requirements
* node.js (v6.11.2 or later recommended)

## Installation
1. Go to <https://discordapp.com/developers> and click `My Apps`.

2. Create a new app by clicking on `New App`.

3. Name it whatever you like, but I think Mathbot sounds cool :D

4. Give it a description and profile picture, you know the drill.

5. Press `Create App`.

6. Now go back to the GitHub repository and click `Clone or download` and then `Download ZIP`.

7. Go into your file explorer, unZIP the file somewhere on your computer and go into the folder.

8. Next, open `config.json` in a plain text editor.

9. Go back to the page of your app on <https://discordapp.com/developers>.

10. Copy the number next to `Client ID` and paste it over `ClientIDGoesHere` in `config.json`.

11. Go back to the app page, reveal the token and paste it over `BotTokenGoesHere` in `config.json`.

12. Ignore `"prefix"` for now. Save `config.json` and close it.

13. Copy the file path of the folder that contains `bot.js` and `config.json`.

14. Press `Win+R` and type in `cmd`, then hit `Enter`.

15. In the command line, type in `cd ` and paste in the file path you copied, then hit `Enter`.

16. Now type `npm install discord.js` and hit `Enter`.

17. Type `node bot.js` and hit `Enter`. If you executed the previous steps successfully, the console will say `Joined all available servers.`, followed by a link!

19. Copy the link and paste it into your web browser's URL bar.

20. Authorize the bot on your Discord account and select the server you want it to join, then click `Authorize`. (note: You need to have 'Manage Server' permissions on a server if you want to let a bot in)

21. The bot will now join the server! Enjoy!

## Usage
To launch Mathbot again after you have closed the command line, press `Win+R` again, type in `cmd` and hit `Enter`. Navigate to your Mathbot folder with `cd` as described in the `Installation` section. Then type `node bot.js` and hit `Enter`. Mathbot has now been lauched!

If you need help with the commands, type `math.help` in the chat of a server that Mathbot is a member of.

If that isn't enough and you want more help, then join [this Discord server](https://discord.gg/n27yKQN) and ask away!

## Bugs and issues
If you happen to find anything you believe is an issue, you can do one of the following:
* Join the official Mathbot Help Chat at <https://discord.gg/n27yKQN>.
* Create an issue on Mathbot's GitHub.

If you have any more questions about Mathbot, feel free to contact me (Bassab03) on Discord. You can find me on [this server](https://discord.gg/n27yKQN).

Thanks for reading and using Mathbot! I hope you enjoy.
