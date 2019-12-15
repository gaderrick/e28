<template>
    <div>
        <h2>Categories</h2>
        <ul data-test='category-name' class='cleanList'>
            <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
        </ul>
    </div>
</template>
<script>
const axios = require('axios');

export default {
    name: 'CategoriesPage',
    data: function() {
        return {
            products: null,
            categories: null
        };
    },
    methods: {
        loadCategories: function() {
            let categories = this.products.map(product => product.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            this.categories = [...new Set(mergedCategories)].sort();
        }
    },
    mounted() {
        this.products = axios
            .get(
                'https://my-json-server.typicode.com/vanillacandy/e28-api/jokes'
                
            )
            .then(response => {
                this.products = response.data;
                this.loadCategories();
            });
    }
  
};
</script>

<style scoped></style>
