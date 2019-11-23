export { default as Recipe } from './Recipe';

export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/gaderrick/p3-recipes-api/',
}

export let site = {
    recipes: []
}