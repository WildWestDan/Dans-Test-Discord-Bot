const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Replies with Good Test!'),
	async execute(interaction) {
		await interaction.reply('Good Test!');
	},
};