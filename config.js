/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/212609536856
   * Follow https://github.com/Killua207x
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'bf500189af',
}

// Other
global.owner = ['2120953686']
global.premium = ['212609536856']
global.packname = '[ᴍᴇᴇᴅ🤨💙][212609536856]'
global.author = 'هـــز ولاڪـــيـــن مـــتـــعـــيـــقـــش'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'هـــذا الامـــر خـــاص بـــادمـــيـــن المـــجـــمـــوعـــة!',
    botAdmin: 'هـــذا المـــر خـــص بادمـــيـــن الـــبـــوت!',
    owner: 'هـــذا الامـــر خـــاص بـــصـــاحـــب الـــبـــوت!',
    group: 'هـــذا الامـــر خـــاص بالمـــجـــمـــوعـــات!',
    private: 'هـــذا الامـــر خـــاص بالـــمـــحـــادثة الخـــاصـــة!',
    bot: 'هــذا الامـــر خـــاص بـــصـــاحـــب الـــبـــوت',
    wait: 'جـــاري الـــتـــحـــمـــيـــل...',
    error: 'خـــطأ!',
    endLimit: 'وقــتــڪ الـــيـــومـــي انـــتـــهـــﯽ انـــتـــظـــر 12 ســـاعــة',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
