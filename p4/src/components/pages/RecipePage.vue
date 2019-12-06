<template>
  <div v-if='recipeLoaded'>
    <div data-test='recipe-name' class='recipeName'>{{ recipe.name }}</div>
    <div class='containter'>
      <div class='divTable'>
        <div class='divTableBody'>
          <div class='divTableRow'>
            <div class='divTableCell'>OG: {{ recipe.og }}</div>
            <div class='divTableCell'>FG: {{ recipe.fg }}</div>
            <div class='divTableCell'>ABV: {{ recipe.abv }}</div>
            <div class='divTableCell'>IBU: {{ recipe.ibu }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Ingredients</div>
      <div
        class='listText'
        v-for='item in recipe.ingredients'
        v-bind:key='item.id'
      >{{ decodeHtml(item) }}</div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Hops</div>
      <div class='listText' v-for='item in recipe.hops' v-bind:key='item.id'>{{ decodeHtml(item) }}</div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Yeast</div>
      <div class='listText' v-for='item in recipe.yeast' v-bind:key='item.id'>{{ decodeHtml(item) }}</div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Other</div>
      <div class='listText' v-for='item in recipe.other' v-bind:key='item.id'>{{ decodeHtml(item) }}</div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Directions</div>
      <div
        class='listText'
        v-for='item in recipe.directions'
        v-bind:key='item.id'
      >{{ decodeHtml(item) }}</div>
    </div>
  </div>
</template>
<script>
import * as app from './../../app.js';

export default {
  name: 'RecipePage',
  props: ['id'],
  components: {},
  methods: {
    decodeHtml: function(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
  },
  data: function() {
    return {
      recipe: null,
      recipeLoaded: false
    };
  },
  mounted() {
    app.axios.get(app.config.api + 'recipes/' + this.id).then(response => {
      this.recipe = response.data;
      this.recipeLoaded = true;
    });
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 5px;
}
.listText {
  text-align: left;
  padding: 3px;
}
.recipeName {
  font-weight: bold;
  font-size: x-large;
}
.boldText {
  font-weight: bold;
}
.divTable {
  display: table;
  width: 80%;
  margin: 0 auto;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  background-color: #eee;
  display: table-header-group;
}
.divTableCell,
.divTableHead {
  border: 1px solid #999999;
  display: table-cell;
  padding: 3px 10px;
  width: 25%;
}
.divTableHeading {
  background-color: #eee;
  display: table-header-group;
  font-weight: bold;
}
.divTableFoot {
  background-color: #eee;
  display: table-footer-group;
  font-weight: bold;
}
.divTableBody {
  display: table-row-group;
}
</style>