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
        <b>{{ingredient.order}}. &nbsp;&nbsp;</b>
        <input
          class='dataInputBox'
          type='text'
          v-bind:id='"ingredient_"+index'
          v-model='ingredient.value'
        />
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Hops</div>
      <div class='listText' v-bind:key='index' v-for='(hop,index) in recipe.hops'>
        <b>{{hop.order}}. &nbsp;&nbsp;</b>
        <input class='dataInputBox' type='text' v-bind:id='"hop_"+index' v-model='hop.value' />
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Yeast</div>
      <div class='listText' v-bind:key='index' v-for='(yeast,index) in recipe.yeasts'>
        <b>{{yeast.order}}. &nbsp;&nbsp;</b>
        <input class='dataInputBox' type='text' v-bind:id='"yeast_"+index' v-model='yeast.value' />
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div class='listText boldText'>Other Ingredients</div>
      <div class='listText' v-bind:key='index' v-for='(other,index) in recipe.otherIngredients'>
        <b>{{other.order}}. &nbsp;&nbsp;</b>
        <input class='dataInputBox' type='text' v-bind:id='"other_"+index' v-model='other.value' />
      </div>
    </div>
    <div class='container' v-if='recipeLoaded'>
      <div
        class='listText boldText'
      >Directions (You may include HTML special characters like "&amp;#176;" in this field)</div>
      <div class='listText' v-bind:key='index' v-for='(direction,index) in recipe.directions'>
        <b>{{direction.order}}. &nbsp;&nbsp;</b>
        <input
          class='dataInputBox'
          type='text'
          v-bind:id='"direction_"+index'
          v-model='direction.value'
        />
      </div>
    </div>
  </div>
</template>
<script>
import * as app from './../../app.js';

export default {
  name: 'EditRecipePage',
  props: ['id'],
  data: function() {
    return {
      localRecipe: null,
      recipe: null,
      recipeName: '',
      description: null,
      origGravity: null,
      finalGravity: null,
      abv: null,
      ibu: null,
      ingredients: [null, null],
      hops: [null, null],
      yeast: [null, null],
      otherIngredients: [null, null],
      directions: [null, null],
      recipeLoaded: false
    };
  },
  mounted() {
    this.localRecipe = new app.Recipe().getDetails();
    this.recipe = this.localRecipe[this.id];
    this.recipeLoaded = true;
  },
  components: {},
  methods: {
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