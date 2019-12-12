<template>
  <div v-if='recipeLoaded'>
    <div class='recipeName'>
      <label>Recipe Name:</label>
      <input
        class='recipeNameInput'
        :class='{ "form-input-error": $v.recipe.recipeName.$error }'
        type='text'
        id='recipeName'
        v-model='$v.recipe.recipeName.$model'
      />
      <div v-if='$v.recipe.recipeName.$error'>
        <div
          class='form-feedback-error'
          v-if='!$v.recipe.recipeName.required'
        >Recipe name is required</div>
        <div
          class='form-feedback-error'
          v-if='!$v.recipe.recipeName.minLength'
        >Recipe name must be at least 4 characters long.</div>
        <small class='form-help'>Min: 4</small>
      </div>
    </div>
    <br />
    <br />
    <div class='containter'>
      <div class='divTable'>
        <div class='divTableBody'>
          <div class='divTableRow'>
            <div class='divTableCell'>
              <label class='boldText'>Original Gravity:</label>
              <input
                class='inputBox'
                :class='{ "form-input-error": $v.recipe.origGravity.$error }'
                type='text'
                id='origGravity'
                v-model='$v.recipe.origGravity.$model'
              />
              <div v-if='$v.recipe.origGravity.$error'>
                <div
                  class='form-feedback-error'
                  v-if='!$v.recipe.origGravity.decimal'
                >Please enter a decimal</div>
              </div>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>Final Gravity:</label>
              <input
                class='inputBox'
                :class='{ "form-input-error": $v.recipe.finalGravity.$error }'
                type='text'
                id='finalGravity'
                v-model='$v.recipe.finalGravity.$model'
              />
              <div v-if='$v.recipe.finalGravity.$error'>
                <div
                  class='form-feedback-error'
                  v-if='!$v.recipe.finalGravity.decimal'
                >Please enter a decimal</div>
              </div>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>ABV:</label>
              <input
                class='inputBox'
                :class='{ "form-input-error": $v.recipe.abv.$error }'
                type='text'
                id='abv'
                v-model='$v.recipe.abv.$model'
              />
              <div v-if='$v.recipe.abv.$error'>
                <div
                  class='form-feedback-error'
                  v-if='!$v.recipe.abv.decimal'
                >Please enter a decimal</div>
              </div>
            </div>
            <div class='divTableCell'>
              <label class='boldText'>IBU:</label>
              <input
                class='inputBox'
                :class='{ "form-input-error": $v.recipe.ibu.$error }'
                type='text'
                id='ibu'
                v-model='$v.recipe.ibu.$model'
              />
              <div v-if='$v.recipe.ibu.$error'>
                <div
                  class='form-feedback-error'
                  v-if='!$v.recipe.ibu.integer'
                >Please enter a integer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Ingredients</div>
      <div class='listText' v-bind:key='index' v-for='(ingredient,index) in recipe.ingredients'>
        <input
          class='dataInputBox'
          type='text'
          v-bind:id='"ingredient_"+index'
          v-model='ingredient.value'
        />&nbsp;
        <button
          data-test='add-ingredient'
          v-on:click='addListItem("ingredient")'
          v-if='index == recipe.ingredients.length-1'
        >Add</button>
        <button
          data-test='remove-ingredient'
          v-on:click='removeListItem("ingredient", index)'
          v-if='index != recipe.ingredients.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Hops</div>
      <div class='listText' v-bind:key='index' v-for='(hop,index) in recipe.hops'>
        <input class='dataInputBox' type='text' v-bind:id='"hop_"+index' v-model='hop.value' />&nbsp;
        <button
          data-test='add-hop'
          v-on:click='addListItem("hops")'
          v-if='index == recipe.hops.length-1'
        >Add</button>
        <button
          data-test='remove-hop'
          v-on:click='removeListItem("hops", index)'
          v-if='index != recipe.hops.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Yeast</div>
      <div class='listText' v-bind:key='index' v-for='(yeast,index) in recipe.yeasts'>
        <input class='dataInputBox' type='text' v-bind:id='"yeast_"+index' v-model='yeast.value' />&nbsp;
        <button
          data-test='add-yeast'
          v-on:click='addListItem("yeast")'
          v-if='index == recipe.yeasts.length-1'
        >Add</button>
        <button
          data-test='remove-yeast'
          v-on:click='removeListItem("yeast", index)'
          v-if='index != recipe.yeasts.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container'>
      <div class='listText boldText'>Other Ingredients</div>
      <div class='listText' v-bind:key='index' v-for='(other,index) in recipe.otherIngredients'>
        <input class='dataInputBox' type='text' v-bind:id='"other_"+index' v-model='other.value' />&nbsp;
        <button
          data-test='add-other'
          v-on:click='addListItem("other")'
          v-if='index == recipe.otherIngredients.length-1'
        >Add</button>
        <button
          data-test='remove-other'
          v-on:click='removeListItem("other", index)'
          v-if='index != recipe.otherIngredients.length-1'
        >Remove</button>
      </div>
    </div>
    <div class='container'>
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
          data-test='add-direction'
          v-on:click='addListItem("direction")'
          v-if='index == recipe.directions.length-1'
        >Add</button>
        <button
          data-test='remove-direction'
          v-on:click='removeListItem("direction", index)'
          v-if='index != recipe.directions.length-1'
        >Remove</button>
      </div>
    </div>
    <button
      data-test='button-save'
      v-if='newRecipe'
      v-on:click='saveRecipe("save", id)'
    >Save Recipe to Local Storage</button>
    <button v-else data-test='button-update' v-on:click='saveRecipe("update", id)'>Update Recipe</button>
    <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
  </div>
</template>
<script>
import * as app from './../../app.js';
import {
  required,
  minLength,
  decimal,
  integer
} from 'vuelidate/lib/validators';

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
  validations: {
    recipe: {
      recipeName: {
        required,
        minLength: minLength(4)
      },
      origGravity: {
        decimal
      },
      finalGravity: {
        decimal
      },
      abv: {
        decimal
      },
      ibu: {
        integer
      }
    }
  },
  watch: {
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
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
      this.$v.$touch();
      if (!this.formHasErrors && this.recipe.recipeName != '') {
        let recipeList = new app.Recipe();

        switch (action) {
          case 'save':
            recipeList.add(this.recipe, -1);
            this.newRecipe = false;
            break;

          case 'update':
            recipeList.add(this.recipe, recipeId);
            this.newRecipe = false;
            break;
          default:
            break;
        }
        this.$router.push({ name: 'myStuff' });
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