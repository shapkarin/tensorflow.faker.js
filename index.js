import { getLyricsData } from './dataset';

async function getData(){
    const data = await getLyricsData();
    console.log(data);
}

getData();