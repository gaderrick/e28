export default class Recipe {

    constructor() {
        // Extract JSON recipe string from local storage
        let localRecipe = localStorage.getItem('recipe');

        // Parse JSON recipe String to `recipe` object
        this.recipe = (localRecipe) ? JSON.parse(localRecipe) : [
            {
                id: '',
                recipeName: '',
                image: '',
                description: '',
                credit: '',
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

    getDetails() {
        return this.recipe;
    }

    add(theRecipe, recipeId) { // , maxRecipeId
        // First see if product is already present
        let test = this.findRecipe(recipeId)
        if (test) {
            // Recipe is already stored; update it
            this.recipe[recipeId] = theRecipe;
        } else {
            // Recipe is new; add it to the local storage variable
            this.recipe.push(theRecipe);
        }

        this.update();
    }

    remove(recipeId) {
        let item = this.findRecipe(recipeId);
        if (item) {
            this.recipe.splice(recipeId, 1);
            this.update();
        }
    }

    /*** Updates cart in localstorage ***/
    update() {
        localStorage.setItem('recipe', JSON.stringify(this.recipe))
    }

    /*** Get a recipe if it exists ***/
    findRecipe(recipeId) {
        let found = false;
        if (typeof this.recipe[recipeId] === 'undefined') {
            found = false;
        } else {
            found = true;
        }
        return found;
    }
}