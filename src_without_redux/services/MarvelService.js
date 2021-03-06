import md5 from 'js-md5';
import axios from 'axios';

const public_key = '30e3b0a30498be9ee6f1028985c2e3d3'
const private_key = 'dbb4863f4b0ed3a3b5fba1a7ad7f10b3c78f5074'
const API_URL = 'http://gateway.marvel.com/v1/public/';
const timestamp = Number(new Date());
const hash = md5.create();

const getCharacters = () => {
    hash.update(timestamp + private_key + public_key);
    return axios.get(`${API_URL}characters`, {
        params: {
            'ts': timestamp,
            'apikey': public_key,
            'hash': hash.hex()
        }
    });
};

export default getCharacters;