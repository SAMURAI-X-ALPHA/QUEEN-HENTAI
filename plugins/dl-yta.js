import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*💝 Queen Hentai 💝 SEARCH YOUTUBE*'
await m.reply(`*_💝 Processing Aᴜᴅɪᴏ BY 💝 Queen Hentai 💝..._*\n\n*💝  command .playdoc ᴏ .play.2 ᴏ .ytmp4doc 💝*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })   
} catch {
await conn.reply(m.chat, '*💝 Queen Hentai 💝 AUDIO ERROR*', m)}
}}
handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler
