# Project 4 - Beer Recipes
+ By: Gerald Derrick
+ Production URL: <http://p4.gaderrick.me>

## Improvements based on P3 peer review feedback
+ Fixed issue where a recipe could be submitted without a name.
+ Removed a dangling variable from the recipe class
+ Removed all console.log outputs from the code

## Outside resources (New for P4)
+ Keep local storage in Cypress, https://blog.liplex.de/keep-local-storage-in-cypress/
+ How to check the value of a form element, https://learntdd.in/vue/
+ Dynamic Inputs Not Validating, https://github.com/vuelidate/vuelidate/issues/356

## Notes for instructor
+ Added custom Cypress functions to allow me to persist localStorage variable between new baseUrl navigations
+ Figured out a neat way to dynamically allocate form input fields and still have Vue be able to control them (ie for validation)
+ Added an additional component/page and underlying code to support a user brew list
+ Added firebase support for reading the recipes from firebase, but I noticed an issue I'd run into when adding recipes back in. I plan to continue developing this as a hobby site, and will be reworking it to that end.
