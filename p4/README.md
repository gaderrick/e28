# Project 4 - Beer Recipes
+ By: Gerald Derrick
+ Production URL: <http://p4.gaderrick.me>

## Outline of features
+ The homepage shows a list of featured beer recipes that are clickable to see the recipe details
+ There is an all recipes page that shows all the recipes in the database (JSON server file for P3)
+ The user has the ability to add a new recipe to local storage; the form is dynamic and usable for adding and editing recipes
+ Submitting a new recipe or editing an exising one automatically redirects to a page showing all the local storage recipes
+ The user has the ability to remove a created recipe from local storage
## New for P4
+ Added unit and E2E testing hooks

## Outside resources (New for P4)
+ Keep local storage in Cypress, https://blog.liplex.de/keep-local-storage-in-cypress/
+ How to check the value of a form element, https://learntdd.in/vue/

## Notes for instructor
+ Added custom Cypress functions to allow me to persist localStorage variable between new baseUrl navigations