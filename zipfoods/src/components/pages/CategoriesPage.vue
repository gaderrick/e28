<template>
    <div>
        <h2>Categories</h2>
        <ul class="cleanList">
            <li v-for="(category, id) in categories" :key="id">{{ category }}</li>
        </ul>
    </div>
</template>
<script>
const axios = require("axios");

export default {
    name: "CategoriesPage",
    components: {},
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
        axios
            .get(
                "https://my-json-server.typicode.com/gaderrick/e28-zipfoods-api/products"
            )
            .then(response => {
                this.products = response.data;
                this.loadCategories();
                //console.log(response);
            });
    }
};
</script>

<style scoped>
</style>