const db = require('./connection');
const { Body, Food, User} = require('../models');

db.once('open', async () => {
    await Body.deleteMany();

    const BodyDocs = await Body.insertMany([
        { plan: 'Cutting', foods:[] },
        { plan: 'Bulking', foods:[] },
      ]);    

console.log(' body seeded');

await Food.deleteMany();

const FoodDocs = await Food.insertMany([
    {
        name: "Orange Chicken",
        category: "asian",
        image: "",
        calories: "242kcal",
        fats: "8g",
        carbs: "10g",
        protein: "32g",
    },
    {
        name: "Orange Chicken",
        category: "asian",
        image: "",
        calories: "637kcal",
        fats: "29g",
        carbs: "43g",
        protein: "50g",
    },
    {
        name: "Fried rice",
        category: "asian",
        image: "",
        calories: "432kcal",
        fats: "13g",
        carbs: "43g",
        protein: "35g",
    },
    {
        name: "Fried rice",
        category: "asian",
        image: "",
        calories: "523cal",
        fats: "13g",
        carbs: "35g",
        protein: "62g",
    },
    {
        name: "Dumplings",
        category: "asian",
        image: "",
        calories: "243cal",
        fats: "2.8g",
        carbs: "32g",
        protein: "17g",
    },
    {
        name: "Dumplings",
        category: "asian",
        image: "",
        calories: "447cal",
        fats: "20g",
        carbs: "35g",
        protein: "28g",
    },
    {
        name: "Egg rolls",
        category: "asian",
        image: "",
        calories: "142",
        fats: "3.5g",
        carbs: "18.6g",
        protein: "9g",
    },
    {
        name: "Egg rolls",
        category: "asian",
        image: "",
        calories: "142",
        fats: "3.5g",
        carbs: "18.6g",
        protein: "8.9g",
    },
    {
        name: "Sushi?",
        category: "asian",
        image: "",
        calories: "63cal",
        fats: "1g",
        carbs: "25g",
        protein: "3g",
    },
    {
        name: "Sushi?",
        category: "asian",
        image: "",
        calories: "440cal",
        fats: "16g",
        carbs: "50g",
        protein: "23",
    },
    {
        name: "Chilaquiles",
        category: "Mexican",
        image: "",
        calories: "272cal",
        fats: "12g",
        carbs: "27g",
        protein: "14g",
    },
    {
        name: "Chilaquiles",
        category: "Mexican",
        image: "",
        calories: "347cal",
        fats: "11g",
        carbs: "33.3g",
        protein: "30.9g",
    },
    {
        name: "Enchiladas",
        category: "Mexican",
        image: "",
        calories: "483cal",
        fats: "22g",
        carbs: "44g",
        protein: "26g",
    },
    {
        name: "Enchiladas",
        category: "Mexican",
        image: "",
        calories: "288cal",
        fats: "11g",
        carbs: "44g",
        protein: "35g",
    },
    {
        name: "Taco",
        category: "Mexican",
        image: "",
        calories: "296cal",
        fats: "13g",
        carbs: "29g",
        protein: "19g",
    },
    {
        name: "Taco",
        category: "Mexican",
        image: "",
        calories: "515",
        fats: "30.7g",
        carbs: "26.3g",
        protein: "35.4",
    },
    {
        name: "Ceviche",
        category: "Mexican",
        image: "",
        calories: "",
        fats: "",
        carbs: "",
        protein: "",
    },
    {
        name: "Ceviche",
        category: "Mexican",
        image: "",
        calories: "",
        fats: "",
        carbs: "",
        protein: "",
    },
    {
        name: "Torta",
        category: "Mexican",
        image: "",
        calories: "357cal",
        fats: "9g",
        carbs: "60g",
        protein: "17g",
    },
    {
        name: "Torta",
        category: "Mexican",
        image: "",
        calories: "1280cal",
        fats: "80g",
        carbs: "69g",
        protein: "85g",
    },
    {
        name: "Hamburger",
        category: "American",
        image: "",
        calories: "381cal",
        fats: "11g",
        carbs: "33g",
        protein: "34g",
    },
    {
        name: "Hamburger",
        category: "American",
        image: "",
        calories: "497cal",
        fats: "25g",
        carbs: "33g",
        protein: "34g",
    },
    {
        name: "Philly Cheese",
        category: "American",
        image: "",
        calories: "440cal",
        fats: "16.3g",
        carbs: "42g",
        protein: "36.8g",
    },
    {
        name: "Philly Cheese",
        category: "American",
        image: "",
        calories: "732cal",
        fats: "44g",
        carbs: "40g",
        protein: "43g",
    },
    {
        name: "Jambalaya",
        category: "American",
        image: "",
        calories: "238cal",
        fats: "8g",
        carbs: "12g",
        protein: "29g",
    },
    {
        name: "Jambalaya",
        category: "American",
        image: "",
        calories: "465cal",
        fats: "20g",
        carbs: "42g",
        protein: "28g",
    },
    {
        name: "Fried Chicken",
        category: "American",
        image: "",
        calories: "316cal",
        fats: "20g",
        carbs: "13g",
        protein: "21g",
    },
    {
        name: "Fried Chicken",
        category: "American",
        image: "",
        calories: "727cal",
        fats: "33g",
        carbs: "61g",
        protein: "43g",
    },
    {
        name: "Mac&Cheese",
        category: "American",
        image: "",
        calories: "198cal",
        fats: "5g",
        carbs: "22g",
        protein: "10g",
    },
    {
        name: "Mac&Cheese",
        category: "American",
        image: "",
        calories: "508cal",
        fats: "16g",
        carbs: "55g",
        protein: "27g",
    },
    {
        name: "Milk Tea Boba",
        category: "",
        image: "",
        calories: "75cal",
        fats: ".4g",
        carbs: "17.8g",
        protein: ".02g",
    },
    {
        name: "Milk Tea Boba",
        category: "dessert",
        image: "",
        calories: "540cal",
        fats: "2g",
        carbs: "133g",
        protein: "2g",
    },
    {
        name: "Flan",
        category: "dessert",
        image: "",
        calories: "202cal",
        fats: "7g",
        carbs: "28g",
        protein: "7g",
    },
    {
        name: "Flan",
        category: "dessert",
        image: "",
        calories: "350cal",
        fats: "10g",
        carbs: "57g",
        protein: "10g",
    },
    {
        name: "Cookies",
        category: "dessert",
        image: "",
        calories: "96cal",
        fats: "5g",
        carbs: "15g",
        protein: "2g",
    },
    {
        name: "Cookies",
        category: "",
        image: "",
        calories: "183cal",
        fats: "8g",
        carbs: "26g",
        protein: "2g",
    },
    {
        name: "Apple Pie",
        category: "dessert",
        image: "",
        calories: "57cal",
        fats: "2g",
        carbs: "6g",
        protein: "3g",
    },
    {
        name: "Apple Pie",
        category: "dessert",
        image: "",
        calories: "379cal",
        fats: "17g",
        carbs: "55g",
        protein: "3g",
    },
    {
        name: "Halo Halo",
        category: "dessert",
        image: "",
        calories: "",
        fats: "",
        carbs: "",
        protein: "",
    },
    {
        name: "Halo Halo",
        category: "dessert",
        image: "",
        calories: "",
        fats: "",
        carbs: "",
        protein: "",
    },
]);
console.log("foods seeded");

await User.deleteMany();

await User.create({
    firstName: "Lifting",
    lastName: "Larry",
    email: "liftinglarry@Marco.com",
});

await User.create({
    firstName: "",
    lastName: "",
    email: "",
});


console.log("user seeded")

process.exit();

})