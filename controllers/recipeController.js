// import the recipeModel

const Recipe = require("../models/recipeModel");

//create a new recipe

exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body); // create the new recipe from the request body
        await newRecipe.save();
        res.status(201).json(newRecipe);

    } catch (error) {
        res.status(400).json({ message: "Not created", error })
    }
}

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find() //to get the recipe data
        res.status(200).json(recipes);

    } catch (error) {
        res.status(500).json({ message: "Error fetching the recipes", error });
    }
}

exports.deleteRecipe= async (req, res) => {
    try {
        const recipes = await Recipe.deleteOne() //to get the recipe data
        res.status(600).json(recipes);

    } catch (error) {
        res.status(505).json({ message: "Error fetching the recipes", error });
    }
}


exports.getRecipeById= async (req, res) => {
    try {
        const recipes = await Recipe.findById(req.params.id) //to get the recipe data
        res.status(201).json(recipes);

    } catch (error) {
        res.status(506).json({ message: "Error fetching the recipes", error });
    }
}

exports.updateRecipe= async (req, res) => {
    try {
        const recipes = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }) //to get the recipe data
        res.status(668).json(recipes);

    } catch (error) {
        res.status(509).json({ message: "Error fetching the recipes", error });
    }
}

