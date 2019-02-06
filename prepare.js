const axios = require('axios');

async function detDataSet(){
    const { data } = await axios.get('https://google.com');
    return data;
};

module.exports = detDataSet;