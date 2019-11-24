export { default as Cart } from './Cart';

export const axios = require('axios');

export const config = {
    //api: 'https://my-json-server.typicode.com/susanBuck/e28/',
    api: 'https://e28-zipfoods-e7684.firebaseio.com/products.json'
}

export let store = {
    cartCount: 0
}