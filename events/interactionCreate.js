const { InteractionType } = require("discord.js");
const fs = require("fs");
module.exports = async(client, interaction) => {
if(!interaction.guild) return;
if(interaction.user.bot) return;

if (interaction.type === InteractionType.ApplicationCommand) {
fs.readdir("./slash", (err, files) => {
if (err) throw err;
files.forEach(async (f) => {
let props = require(`../slash/${f}`);
if (interaction.commandName.toLowerCase() === props.name.toLowerCase()) {
try {
return props.run(client, interaction);
} catch (e) {
return interaction.reply({
      content: "Something Went Wrong | Perhaps command not registered?",
      ephemeral: true
    }).catch(e => { })
}
}
});
});
}

}
