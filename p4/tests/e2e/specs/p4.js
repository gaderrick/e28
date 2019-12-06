describe('P4', () => {
    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    let recipe = {
        "id": 1,
        "name": "Cream Ale",
        "og": "1.049",
        "fg": "1.010",
        "abv": "5%",
        "ibu": 20,
        "ingredients": [
            "3.3 lbs Briess Golden Light LME",
            "2.5 lbs American 6-Row"
        ],
        "hops": [
            "2 oz Fuggles hop pellets"
        ],
        "yeast": [
            "White Labs Australian Ale"
        ],
        "directions": [
            "1. Steep grains in bag in 2.5 gal of water at 155&#176;F for 30 minutes"
        ]
    }

    let newRecipe = {
        "id": 2,
        "name": "Jerry's Double IPA",
        "og": "1.010",
        "fg": "1.020",
        "abv": "4.9%",
        "ibu": 100,
        "ingredients": [
            "3.3 lbs Briess Golden Light LME",
            "2.5 lbs American 6-Row"
        ],
        "hops": [
            "2 oz Fuggles hop pellets"
        ],
        "yeast": [
            "White Labs Australian Ale"
        ],
        "directions": [
            "1. Steep grains in bag in 2.5 gal of water at 155&#176;F for 30 minutes"
        ]
    }

    it('Tests the homepage', () => {
        cy.visit('/')
        cy.contains('span', 'featured recipes')

        cy.get('[data-test="featured-beer"]').should('have.length', 2)

        cy.get('[data-test="featured-beer"]').first().click()
        cy.contains('[data-test="recipe-name"]', recipe.name)
    })

    it('Tests the recipes page; add a recipe to the brew list; remove the recipe from the list', () => {
        cy.visit('/recipes')
        cy.get('[data-test="recipe-name"]').should('have.length', 4)
        cy.get('[data-test="brew-beer"]').first().click()
        cy.get('[data-test="menu-brewlist"]').click()
        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.get('[data-test="remove-brew"]').first().click()
        cy.contains('div', 'There are currently no beers')
    })

    it('Tests the add a recipe functionality', () => {
        cy.visit('/recipes/edit/0')
        cy.contains('div', 'Recipe Name:')
        cy.get('[id="recipeName"]').type(newRecipe.name)

        cy.get('[id="origGravity"]').type(newRecipe.og)
        cy.get('[id="finalGravity"]').type(newRecipe.fg)
        cy.get('[id="abv"]').type(newRecipe.abv)
        cy.get('[id="ibu"]').type(newRecipe.ibu)

        cy.get('[id="ingredient_0"]').type(newRecipe.ingredients[0])
        cy.get('[data-test="add-ingredient"]').first().click()
        cy.get('[id="hop_0"]').type(newRecipe.hops[0])
        cy.get('[data-test="add-hop"]').first().click()
        cy.get('[id="yeast_0"]').type(newRecipe.yeast[0])
        cy.get('[data-test="add-yeast"]').first().click()
        cy.get('[id="direction_0"]').type(newRecipe.directions[0])
        cy.get('[data-test="add-direction"]').first().click()

        cy.get('[data-test="button-save"]').click()
    })

    it('Makes sure the recipe was added', () => {
        cy.get('[data-test="menu-mystuff"]').click()
        cy.contains('div', "Jerry's Double IPA")
        cy.get('[data-test="edit-recipe"]').click()
    })

    it('Edits the recipe and updates the stored data', () => {
        cy.get('[id="ingredient_1"]').type(newRecipe.ingredients[1])
        cy.get('[data-test="add-ingredient"]').first().click()

        cy.get('[data-test="button-update"]').click()
    })

    it('Makes sure the update was added and persisted', () => {
        cy.get('[data-test="edit-recipe"]').first().click()
        cy.get('[id="ingredient_1"]').should('have.value', '2.5 lbs American 6-Row')
    })

    it('Deletes a personal recipe', () => {
        cy.get('[data-test="menu-mystuff"]').click()
        cy.get('[data-test="remove-recipe"]').first().click()
        cy.contains('div', 'You do not have any personal recipes stored')
    })

})