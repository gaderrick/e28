export default class Recipe {

    constructor() {
        // Extract JSON cart string from local storage
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

    add(theRecipe, recipeId, maxRecipeId) {
        console.log("The recipe: " + theRecipe);

        // First see if product is already present
        let test = this.findRecipe(recipeId)
        if (test) {
            // Recipe is already stored; update it
            this[maxRecipeId] = theRecipe;
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

    maxIndex() {
        let maxId = 0;
        for (let key of Object.keys(this)) {
            if (this[key].id > maxId) {
                maxId = this.localRecipe[key].id + 1;
            }
        }
        return maxId;
    }

    /*** Get a recipe if it exists ***/
    findRecipe(recipeId) {
        console.log("Testing");
        let found = false;
        for (let key of Object.keys(this)) {
            if (this[key].id == recipeId) {
                found = true;
            }
        }
        return found;
    }
}