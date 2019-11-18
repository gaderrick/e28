<template>
  <div>
    <div class='recipeName'>
      <label>
        Recipe Name:
        <input
          class='recipeNameInput'
          type='text'
          id='recipeName'
          v-model='recipe.recipeName'
          v-if='recipeLoaded'
        />
      </label>
      <br />
      <br />
    </div>
    <div class='containter'>
      <div class='divTable'>
        <div class='divTableBody'>
          <div class='divTableRow'>
            <div class='divTableCell'>
              <label class='boldText'>
                Original Gravity:
                <input
                  class='inputBox'
                  type='text'
                  id='origGravity'
                  v-model='recipe.origGravity'
                  v-if='recipeLoaded'
                />
              </label>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>
                Final Gravity:
                <input
                  class='inputBox'
                  type='text'
                  id='finalGravity'
                  v-model='recipe.finalGravity'
                  v-if='recipeLoaded'
                />
              </label>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>
                ABV:
                <input
                  class='inputBox'
                  type='text'
                  id='abv'
                  v-model='recipe.abv'
                  v-if='recipeLoaded'
                />
              </label>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>
                IBU:
                <input
                  class='inputBox'
                  type='text'
                  id='ibu'
                  v-model='recipe.ibu'
                  v-if='recipeLoaded'
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Ingredients</div>
      <div class='listText' v-bind:key='index' v-for='(ingredient,index) in recipe.ingredients'>
        <input
          class='dataInputBox'
          type='text'
          v-bind:id='"ingredient_"+index'
          v-model='ingredient.value'
        />&nbsp;
        <button
          v-on:click='addListItem("ingredient")'
          v-if='index == recipe.ingredients.length-1'
        >Add</button>
        <button
          v-on:click='removeListItem("ingredient", index)'
          v-if='index != recipe.ingredients.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Hops</div>
      <div class='listText' v-bind:key='index' v-for='(hop,index) in recipe.hops'>
        <input class='dataInputBox' type='text' v-bind:id='"hop_"+index' v-model='hop.value' />&nbsp;
        <button v-on:click='addListItem("hops")' v-if='index == recipe.hops.length-1'>Add</button>
        <button
          v-on:click='removeListItem("hops", index)'
          v-if='index != recipe.hops.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Yeast</div>
      <div class='listText' v-bind:key='index' v-for='(yeast,index) in recipe.yeasts'>
        <input class='dataInputBox' type='text' v-bind:id='"yeast_"+index' v-model='yeast.value' />&nbsp;
        <button v-on:click='addListItem("yeast")' v-if='index == recipe.yeasts.length-1'>Add</button>
        <button
          v-on:click='removeListItem("yeast", index)'
          v-if='index != recipe.yeasts.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Other Ingredients</div>
      <div class='listText' v-bind:key='index' v-for='(other,index) in recipe.otherIngredients'>
        <input class='dataInputBox' type='text' v-bind:id='"other_"+index' v-model='other.value' />&nbsp;
        <button
          v-on:click='addListItem("other")'
          v-if='index == recipe.otherIngredients.length-1'
        >Add</button>
        <button
          v-on:click='removeListItem("other", index)'
          v-if='index != recipe.otherIngredients.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div
        class='listText boldText'
      >Directions (You may include HTML special characters like "&amp;#176;" in this field)</div>
      <div class='listText smallerText'>
        Please enter directions like this:
        <br />1. This is the first direction
      </div>
      <div class='listText' v-bind:key='index' v-for='(direction,index) in recipe.directions'>
        <input
          class='dataInputBox'
          type='text'
          v-bind:id='"direction_"+index'
          v-model='direction.value'
        />&nbsp;
        <button
          v-on:click='addListItem("direction")'
          v-if='index == recipe.directions.length-1'
        >Add</button>
        <button
          v-on:click='removeListItem("direction", index)'
          v-if='index != recipe.directions.length-1'
        >Remove</button>
      </div>
    </div>
    <button v-if='newRecipe' v-on:click='saveRecipe("save", id)'>Save Recipe to Local Storage</button>
    <button v-else v-on:click='saveRecipe("update", id)'>Update Recipe</button>
  </div>
</template>
<script>
import * as app from './../../app.js';

export default {
  name: 'EditRecipePage',
  props: ['propId'],
  data: function() {
    return {
      id: null,
      localRecipe: null,
      recipe: null,
      recipeLoaded: false,
      newRecipe: false,
      maxLocalId: null
    };
  },
  mounted() {
    this.id = this.propId;
    this.localRecipe = new app.Recipe().getDetails();
    if (this.localRecipe[this.id] == null) {
      this.id = 0;
    }
    this.recipe = this.localRecipe[this.id];

    if (this.id == 0) {
      this.newRecipe = true;
    }

    this.recipeLoaded = true;
  },
  components: {},
  methods: {
    addListItem: function(listType) {
      switch (listType) {
        case 'ingredient':
          this.recipe.ingredients.push({ order: null, value: '' });
          break;
        case 'hops':
          this.recipe.hops.push({ order: null, value: '' });
          break;
        case 'yeast':
          this.recipe.yeasts.push({ order: null, value: '' });
          break;
        case 'other':
          this.recipe.otherIngredients.push({ order: null, value: '' });
          break;
        case 'direction':
          this.recipe.directions.push({ order: null, value: '' });
          break;
        default:
          break;
      }
    },
    removeListItem: function(listType, idx) {
      switch (listType) {
        case 'ingredient':
          this.recipe.ingredients.splice(idx, 1);
          break;
        case 'hops':
          this.recipe.hops.splice(idx, 1);
          break;
        case 'yeast':
          this.recipe.yeasts.splice(idx, 1);
          break;
        case 'other':
          this.recipe.otherIngredients.splice(idx, 1);
          break;
        case 'direction':
          this.recipe.directions.splice(idx, 1);
          break;
        default:
          break;
      }
    },
    saveRecipe: function(action, recipeId) {
      let recipeList = new app.Recipe();

      switch (action) {
        case 'save':
          recipeList.add(this.recipe, -1);
          this.newRecipe = false;

          // this.addAlert = true;
          // setTimeout(() => (this.addAlert = false), 2000);
          break;

        case 'update':
          console.log('Updating Recipe ID:' + recipeId);
          recipeList.add(this.recipe, recipeId);
          this.newRecipe = false;
          break;
        default:
          break;
      }
    },
    decodeHtml: function(html) {
      var txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
  }
};
</script>

<style lang='scss'>
@import './../../assets/css/recipe.scss';
</style>