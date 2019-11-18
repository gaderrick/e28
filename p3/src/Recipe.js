export default class Recipe {

    constructor() {
        // Extract JSON recipe string from local storage
        let localRecipe = localStorage.getItem('recipe');

        // Parse JSON recipe String to `recipe` object
        this.recipe = (localRecipe) ? JSON.parse(localRecipe) : [
            {
                id: '',
                recipeName: '',
                description: '',
                origGravity: '',
                finalGravity: '',
                abv: '',
                ibu: '',
                ingredients: [{ order: null, value: '' }],
                hops: [{ order: null, value: '' }],
                yeasts: [{ order: null, value: '' }],
                otherIngredients: [{ order: null, value: '' }],
                directions: [{ order: null, value: '' }]
            }
        ];
    }

    /*** Getter method for items ***/
    getDetails() {
        return this.recipe;
    }

    add(theRecipe, recipeId) { // , maxRecipeId
        // First see if product is already present
        let test = this.findRecipe(recipeId)
        console.log("Recipe exists? " + test);
        if (test) {
            // Recipe is already stored; update it
            this.recipe[recipeId] = theRecipe;
            console.log(this.recipe);
        } else {
            // Recipe is new; add it to the local storage variable

            this.recipe.push(theRecipe);
            console.log(this.recipe);
        }

        this.update();
    }

    /*** Updates cart in localstorage ***/
    update() {
        localStorage.setItem('recipe', JSON.stringify(this.recipe))
    }

    /*** Get a recipe if it exists ***/
    findRecipe(recipeId) {
        console.log("In findRecipe..." + recipeId);
        let found = false;
        if (typeof this.recipe[recipeId] === 'undefined') {
            console.log('Recipe not found');
            found = false;
        } else {
            found = true;
            console.log('Recipe found');
        }
        // for (let key of Object.keys(this)) {
        //     if (this[key].id == recipeId) {
        //         found = true;
        //     }
        // }
        return found;
    }
}