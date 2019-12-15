<template>
    <div>
        <p>GoodJoke website a website for joke research. </p>

    </div>
</template>

<script>
import ShowFeatured from './../ShowFeatured.vue';

export default {
  name: 'HomePage',
  props: {ShowFeatured},
  data: function() {
    return {
      featuredCategory: 'snacks'
    };
  }
};
</script>

