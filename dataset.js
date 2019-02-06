import axios from 'axios';

export const getLyricsData = async function getLyricsData(){
    const { data } = await axios.get('https://google.com');
    return data;
};