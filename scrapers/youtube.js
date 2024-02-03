const ytdl = require('ytdl-core');
const yts = require('yt-search');
const yts2 = require("youtube-yts")
const axios = require('axios');



function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };

function ytMp4(text) {
    return new Promise(async(resolve, reject) => {
        let andres = await yts2(text)
        let andresvpn = andres.all[0]
        ytdl.getInfo(andresvpn.url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            let url_yt = andresvpn.url
            let id_video = andresvpn.videoId
            let duracion = andresvpn.timestamp
            const resultado = {
                creator: 'Caliph',
                editor_mejorador: "Andres-vpn",
                title,
                result: tinyUrl,
                rersult2: resultFix[0].video,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                url_yt,
                id_video,
                duracion,
                desc
            };
            resolve(resultado)
        }).catch(reject);
    });
};

function ytMp3(text) {
    return new Promise((resolve, reject) => {
        let andres = await yts2(text)
        let andresvpn = andres.all[0]
        ytdl.getInfo(andresvpn.url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            const resultado = {
                creator: 'Caliph',
                title,
                result: tinyUrl,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            };
            resolve(resultado)
        }).catch(reject);
    });
}

function ytPlay(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(getData) => {
            let result = getData.videos.slice( 0, 5 );
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url);
            }
            let random = url[0];
            let getAudio = await ytMp3(random);
            resolve(getAudio);
        }).catch(reject);
    });
};

function ytPlayVid(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(getData) => {
            let result = getData.videos.slice( 0, 5 );
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url);
            }
            let random = url[0];
            let getVideo = await ytMp4(random);
            resolve(getVideo);
        }).catch(reject);
    });
};

module.exports = { 
    ytMp4,
    ytMp3,
    ytPlay,
    ytPlayVid
 };
