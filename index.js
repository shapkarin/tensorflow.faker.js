import musicmatch from 'musicmatch';
import { apikey } from './config';

const music = musicmatch({ apikey });

const getTopTracksIds = async function(){
    try {
        const { message: { body: { track_list } } } = await music.chartTracks({
            page: 1,
            page_size: 30,
            country: 'ru',
            f_has_lyrics: 1
        });
        const result = track_list.map(({ track }) => track.track_id);
        return result;
    } catch(error) {
        console.log(error);
    }
}

const getLyrics = async function(){
    try {
        const ids = await getTopTracksIds();
        const lyricsArray = ids.map(async id => {
            const { message: { body } } = await music.trackLyrics({ track_id:id });
            return body;
        });
        const data = await Promise.all(lyricsArray);
        const result = data.map(({ lyrics }) => lyrics.lyrics_body);
        const message = '******* This Lyrics is NOT for Commercial use *******';
        // todo: one lyrics language...
        return result.join('\n').replace(message);
    } catch(error) {
        console.log(error);
    }
};

getLyrics().then( lyrics => console.log( lyrics ) );