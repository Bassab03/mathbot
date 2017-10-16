const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.login(config.token);

client.on("ready", () => {
  console.log("Joined all available servers.\nhttps://discordapp.com/oauth2/authorize?client_id=" + config.id + "&scope=bot");
  client.user.setGame("with numbers");
});

function getSubstringIndex(str, substring, n) {
    var times = 0, index = null;
    while (times < n && index !== -1) {
        index = str.indexOf(substring, index+substring.length);
        times++;
    }
    return index;
}

client.on("message", (message) => {
  if ((!message.content.startsWith(config.prefix) && !message.content.toLowerCase().startsWith("math.")) || message.author.bot) return;
  if (message.content.startsWith("math.ping")) {
    message.channel.send("Pong!");
  } else if (message.content.startsWith("math.invite")) {
    message.author.send("https://discordapp.com/oauth2/authorize?client_id=" + config.id + "&scope=bot");
    message.react("✔");
  } else if (message.content.startsWith("math.server")) {
    message.author.send("https://discord.gg/n27yKQN");
    message.react("✔");
  } else if (message.content.toLowerCase().startsWith("math.help")) {
    message.channel.send("```math.help     Shows this information.\nmath.ping     Pings me.\nmath.invite   Invites me to your server.\nmath.server   Invites you to my server.\n\n" + config.prefix + "             Prefix.\n+             Add.\n-             Subtract.\n*             Multiply.\n/             Divide.\n%             Modulo.\n\npow(x, y)     Raises x to the power of y.\nsqrt(x)       Square root of x.\nfloor(x)      Rounds x down to nearest integer.\nceil(x)       Rounds x up to nearest integer.```");
  } else if (message.content.startsWith(config.prefix)) {
    let calculate = "=" + message.content.toLowerCase().substring(config.prefix.length);
    if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))) {
      calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()");/*.replace(/acos|arccosine/g, "Math.acos").replace(/asin|arcsine/g, "Math.asin").replace(/atan|arctangent|atan1|arctangent1/g, "Math.atan").replace(/atan2|arctangent2/g, "Math.atan2").replace(/cos|cosine/g, "Math.cos").replace(/sin|sine/g, "Math.sin").replace(/tan|tangent/g, "Math.tan")*/;
      if (calculate.replace(/[^%]/g, "").length > 0) {
        for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
          while ((calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "+" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "-" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "*" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "/" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "(" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == ")" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "," || getSubstringIndex(calculate, "%", i+1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
            for (let j = getSubstringIndex(calculate, "%", i+1); j > -1; j--) {
              if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
                calculate = calculate.substring(0, j+1) + (calculate.substring(j+1, getSubstringIndex(calculate, "%", i+1))/100) + calculate.substring(getSubstringIndex(calculate, "%", i+1)+1, calculate.length);
                break;
              }
            }
          }
        }
      }
      calculate =  calculate.replace(/=/g, "");
      if (isFinite(eval(calculate))) message.channel.send(eval(calculate));
    }
  }
});
