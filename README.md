# Capstone-Project
Hotel Management System

# CustomerModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Steps to create and run the project

ng --version;

ng new Report-Module

Routing -> yes

css -> yes

Then after building the project start/run the application

using npm start or ng serve -o or ng s -o



2. Then install bootstrap and fontawesome/fontaweome-free https://www.npmjs.com/package/font-awesome

npm i bootstrap @fontawesome/fontawesome-free 

npm i bootstrap  font-awesome 

3. then need to add cdnjs in index.html  url->> https://cdnjs.com/libraries/font-awesome
<!--   https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

    and also bootstrap cdn 
    
 <!-- CSS only -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
 integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

 


4. then need to add style in the angular.json 

            "styles": [
              "node_modules/font-awesome/css/font-awesome.css",
              "node_modules/bootstrap/dist/css",
              "src/styles.css"
            ],
             "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
            ]

5. then to add google fonts we need to go url --> https://fonts.google.com/specimen/Ubuntu?query=ubuntu&preview.text=gouse%20peera&preview.text_type=custom#standard-styles

and paste the import in global css style.css

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300&display=swap');
</style>
