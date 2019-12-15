export { default as Cart } from './Cart';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/vanillacandy/e28-api/',
}

export let store = {
    cartCount: 0
}