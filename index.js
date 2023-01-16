const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  Recipe.insertMany(data)
  .then(recipe => {
    recipe.foreEach(recipe => {
      console.log(`Successfully added recipe: ${recipe.title}`)
    });
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: '100'})
  .then(recipe => {
    consolelog(`Updated ${recipe.title} duration`);
  })
  .catch(error => {
    console.error(`Error ${recipe.title} duration`, error);
  });

  Recipe.deleteOne({title: 'Carrot cake'})
  .then(recipe => {
    consolelog(`Remove ${recipe.title}`);
  })
  .catch(error => {
    console.error(`Error removing ${recipe.title}`, error);
  });


