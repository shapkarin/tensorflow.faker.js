import musicmatch from 'musicmatch';
import { apikey } from './config';

const music = musicmatch({ apikey });

const getTopTracksIds = async function(){
    try{
        const { message: { body: { track_list } } } = await music.chartTracks({
            page: 1,
            page_size: 30,
            country: 'ru',
            f_has_lyrics: 1
        });
        const result = track_list.map(({ track }) => track.track_id);
        return result;
    }catch(error){
        console.log(error);
    }
}

getTopTracksIds().then(ids => console.log( ids ));