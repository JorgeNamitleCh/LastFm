import axios from "axios";
const headers = {
    'Access-Control-Allow-Origin': '*'
};

const baseURL = 'https://ws.audioscrobbler.com';
export const api = axios.create({ baseURL });


export const userClient = {
    appName: 'Test Angularjs project',
    apiKey: 'be8c6a4c47c8e04774909a893e4c64fe',
    secret: 'e3abe9500f136afa46b67a112aeeba1f',
    registeredTo: 'leifermendez'
}