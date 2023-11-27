const fs = require('fs');
const ytdl = require('ytdl-core');
const fetch = require('node-fetch');
const path = require('path');
const ytSearch = require('yt-search');
const baileys = require("@whiskeysockets/baileys")

const tempDir = './temp';

async function getImageBuffer(url) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return buffer;
}

async function videoyt(url, mek, conn, from, user) {
  try {
    const videoInfo = await ytdl.getBasicInfo(url);
    const formats = await ytdl.getInfo(url);
    const availableFormats = formats.formats;
    const videoFormat = availableFormats.find((format) => format.hasVideo && format.hasAudio);

    if (videoFormat) {
      const videoUrl = videoFormat.url;
      const videoResponse = await fetch(videoUrl);
      const videoBuffer = await videoResponse.buffer();

      const title = videoInfo.videoDetails ? videoInfo.videoDetails.title : 'Video Desconocido';
      const likes = videoInfo.videoDetails && videoInfo.videoDetails.likes ? videoInfo.videoDetails.likes.toLocaleString() : 'Desconocido';
      const viewCount = videoInfo.videoDetails && videoInfo.videoDetails.viewCount ? videoInfo.videoDetails.viewCount.toLocaleString() : 'Desconocido';
      const authorName = videoInfo.videoDetails ? videoInfo.videoDetails.author.name : 'Desconocido';
      const thumbnail = videoInfo.videoDetails ? videoInfo.videoDetails.thumbnails[0].url : '';
      const thumbnailBuffer = await getImageBuffer(thumbnail);

      const caption = `🖥️ ᴛɪᴛᴜʟᴏ: ${title}\n👍 ʟɪᴋᴇs: ${likes}\n👀 ᴠɪsɪᴛᴀs: ${viewCount} \n🔗 ʟɪɴᴋ ${url}`;

      await conn.sendMessage(from, { image: thumbnailBuffer, caption: caption, quoted: mek });
      await conn.sendMessage(from, { text: `sᴜ ᴠɪᴅᴇᴏ ᴇsᴛᴀ sɪᴇɴᴅᴏ ᴘʀᴏᴄᴇsᴀᴅᴏ\n*sɪ sᴜ ᴠɪᴅᴇᴏ ɴᴏ ᴇs ᴇɴᴠɪᴀᴅᴏ ɪɴᴛᴇɴᴛᴇ ɴᴜᴇᴠᴀᴍᴇɴᴛᴇ*`});
      await new Promise(resolve => setTimeout(resolve, 5000));
      await conn.sendMessage(from, { video: videoBuffer, caption: `ᴀǫᴜɪ ᴇsᴛᴀ ᴛᴜ ᴠɪᴅᴇᴏ` })

    } else {
      console.error('No se encontró el formato de video deseado.');
    }
  } catch (error) {
    console.error(`Error al obtener información del video de YouTube: ${error}`);

    conn.sendMessage(from, {
      text: 'Ocurrió un error al obtener información del video de YouTube.',
      quoted: mek
    });
  }
}

async function audioyt(url, mek, conn, from, user) {
  try {
    const audioInfo = await ytdl.getBasicInfo(url);
    const formats = await ytdl.getInfo(url);
    const availableFormats = formats.formats;
    const audioFormat = availableFormats.find((format) => format.hasAudio && format.container === 'mp4');

    if (audioFormat) {
      const audioUrl = audioFormat.url;
      const audioResponse = await fetch(audioUrl);
      const audioBuffer = await audioResponse.buffer();

      const title = audioInfo.videoDetails ? audioInfo.videoDetails.title : 'Audio Desconocido';
      const authorName = audioInfo.videoDetails ? audioInfo.videoDetails.author.name : 'Desconocido';

      const caption = `🎵 ᴛɪᴛᴜʟᴏ *${title}*\n🖥️ ᴄᴀɴᴀʟ: ${authorName}\nʟɪɴᴋ: ${url}`;
      await conn.sendMessage(from, { text: caption })


      await conn.sendMessage(from, {
        audio: audioBuffer,
        mimetype: 'audio/mp4',
        quoted: mek
      });
    } else {
      console.error('No se encontró el formato de audio deseado.');
    }
  } catch (error) {
    console.error(`Error al obtener información del audio de YouTube: ${error}`);
  }}

module.exports = {
  videoyt,
  audioyt,
};
