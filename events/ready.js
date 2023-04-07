const config = require("../config.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = async (client) => {
console.log(`${client.user.tag} is online!`)

client.user.setActivity(config.botStatus)

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
(async () => {
try {
await rest.put(Routes.applicationCommands(client.user.id), {
body: await client.commands,
});
console.log("[ Slash Commands ] - ✅ Loaded all slash commands!");
} catch(e) {
console.log("[ Slash Commands ] - ❌ Failed to load all slash commands!" + e);
}
})();

}
