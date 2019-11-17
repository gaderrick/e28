export default class Recipe {

    constructor() {
        // Extract JSON cart string from local storage
        let localRecipe = localStorage.getItem('recipe');

        // Parse JSON recipe String to `recipe` object
        this.recipe = (localRecipe) ? JSON.parse(localRecipe) : [
            {
                id: 0,
                recipeName: '',
                description: '',
                origGravity: '',
                finalGravity: '',
                abv: '',
                ibu: '',
                ingredients: [{ order: 1, value: 'Enter ingredient here' }],
                hops: [{ order: 1, value: 'Enter hop type here' }],
                yeasts: [{ order: 1, value: 'Enter yeast type here' }],
                otherIngredients: [{ order: 1, value: 'Enter other ingredient here' }],
                directions: [{ order: 1, value: 'Enter direction here' }]
            }
        ];
    }

    /**
    * Getter method for items
    */
    getDetails() {
        return this.recipe;
    }

}