import axios from 'axios' 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d01a14642270efb3f39f7119a9d946390e166d454da0f8d84ff8c1428aa98a5a'
    }
});

