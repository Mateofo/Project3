const db = require('./connection');
const { Body, Food, User} = require('../models');

db.once('open', async () => {


await Food.deleteMany();

const FoodDocs = await Food.insertMany([
    {
        name: "Orange Chicken",
        category: "asian",
        image: "OrangeChicken.jpg",
        calories: "242kcal",
        fats: "8g",
        carbs: "10g",
        protein: "32g",
        isLowCalorie: true,
    },
    {
        name: "Orange Chicken",
        category: "asian",
        image: "OrangeChicken.jpg",
        calories: "637kcal",
        fats: "29g",
        carbs: "43g",
        protein: "50g",
        isLowCalorie: false,
    },
    {
        name: "Fried rice",
        category: "asian",
        image: "FriedRice.jpg",
        calories: "432kcal",
        fats: "13g",
        carbs: "43g",
        protein: "35g",
        isLowCalorie: true,
    },
    {
        name: "Fried rice",
        category: "asian",
        image: "FriedRice.jpg",
        calories: "523cal",
        fats: "13g",
        carbs: "35g",
        protein: "62g",
        isLowCalorie: false,
    },
    {
        name: "Dumplings",
        category: "asian",
        image: "Dumpling.jpg",
        calories: "243cal",
        fats: "2.8g",
        carbs: "32g",
        protein: "17g",
        isLowCalorie: true,
    },

    {
        name: "Dumplings",
        category: "asian",
        image: "Dumpling.jpg",
        calories: "447cal",
        fats: "20g",
        carbs: "35g",
        protein: "28g",
        isLowCalorie: false,
    },
    {
        name: "Egg rolls",
        category: "asian",
        image: "EggRoll.jpg",
        calories: "142",
        fats: "3.5g",
        carbs: "18.6g",
        protein: "9g",
        isLowCalorie: true,
    },
    {
        name: "Egg rolls",
        category: "asian",
        image: "EggRoll.jpg",
        calories: "142",
        fats: "3.5g",
        carbs: "18.6g",
        protein: "8.9g",
        isLowCalorie: false,
    },
    {
        name: "Sushi?",
        category: "asian",
        image: "Sushi.jpg",
        calories: "63cal",
        fats: "1g",
        carbs: "25g",
        protein: "3g",
        isLowCalorie: true,
    },
    {
        name: "Sushi?",
        category: "asian",
        image: "Sushi.jpg",
        calories: "440cal",
        fats: "16g",
        carbs: "50g",
        protein: "23",
        isLowCalorie: false,
    },
    {
        name: "Chilaquiles",
        category: "Mexican",
        image: "Chilaquiles.jpg",
        calories: "272cal",
        fats: "12g",
        carbs: "27g",
        protein: "14g",
        isLowCalorie: true,
    },
    {
        name: "Chilaquiles",
        category: "Mexican",
        image: "Chilaquiles.jpg",
        calories: "347cal",
        fats: "11g",
        carbs: "33.3g",
        protein: "30.9g",
        isLowCalorie: false,
    },
    {
        name: "Enchiladas",
        category: "Mexican",
        image: "Enchiladas.jpg",
        calories: "483cal",
        fats: "22g",
        carbs: "44g",
        protein: "26g",
        isLowCalorie: false
        
    },
    {
        name: "Enchiladas",
        category: "Mexican",
        image: "Enchiladas.jpg",
        calories: "288cal",
        fats: "11g",
        carbs: "44g",
        protein: "35g",
        isLowCalorie: true,
    },
    {
        name: "Taco",
        category: "Mexican",
        image: "Taco.jpg",
        calories: "296cal",
        fats: "13g",
        carbs: "29g",
        protein: "19g",
        isLowCalorie: true,
    },
    {
        name: "Taco",
        category: "Mexican",
        image: "Taco.jpg",
        calories: "515",
        fats: "30.7g",
        carbs: "26.3g",
        protein: "35.4",
        isLowCalorie: false,
    },
    {
        name: "Ceviche",
        category: "Mexican",
        image: "Ceviche.jpg",
        calories: "101cal",
        fats: "1g",
        carbs: "10g",
        protein: "15.5g",
        isLowCalorie: true,
    },
    {
        name: "Ceviche",
        category: "Mexican",
        image: "Ceviche.jpg",
        calories: "216cal",
        fats: "9g",
        carbs: "21g",
        protein: "23g",
        isLowCalorie: false,
    },
    {
        name: "Torta",
        category: "Mexican",
        image: "Torta.jpg",
        calories: "357cal",
        fats: "9g",
        carbs: "60g",
        protein: "17g",
        isLowCalorie: true,
    },
    {
        name: "Torta",
        category: "Mexican",
        image: "Torta.jpg",
        calories: "1280cal",
        fats: "80g",
        carbs: "69g",
        protein: "85g",
        isLowCalorie: false,
    },
    {
        name: "Hamburger",
        category: "American",
        image: "Hamburger.jpg",
        calories: "381cal",
        fats: "11g",
        carbs: "33g",
        protein: "34g",
        isLowCalorie: true,
    },
    {
        name: "Hamburger",
        category: "American",
        image: "Hamburger.jpg",
        calories: "497cal",
        fats: "25g",
        carbs: "33g",
        protein: "34g",
        isLowCalorie: false,
    },
    // {
    //     name: "Philly Cheese Steak",
    //     category: "American",
    //     image: "Philly Cheese.jpg",
    //     calories: "440cal",
    //     fats: "16.3g",
    //     carbs: "42g",
    //     protein: "36.8g",
    //     isLowCalorie: true,
    // },
    // {
    //     name: "Philly Cheese Steak",
    //     category: "American",
    //     image: "Philly Cheese.jpg",
    //     calories: "732cal",
    //     fats: "44g",
    //     carbs: "40g",
    //     protein: "43g",
    //     isLowCalorie: false,
    // },
    {
        name: "Jambalaya",
        category: "American",
        image: "Jambalaya.jpg",
        calories: "238cal",
        fats: "8g",
        carbs: "12g",
        protein: "29g",
        isLowCalorie: true,
    },
    {
        name: "Jambalaya",
        category: "American",
        image: "Jambalaya.jpg",
        calories: "465cal",
        fats: "20g",
        carbs: "42g",
        protein: "28g",
        isLowCalorie: false,
    },
    // {
    //     name: "Fried Chicken",
    //     category: "American",
    //     image: "Fried Chicken.jpg",
    //     calories: "316cal",
    //     fats: "20g",
    //     carbs: "13g",
    //     protein: "21g",
    //     isLowCalorie: true,
    // },
    // {
    //     name: "Fried Chicken",
    //     category: "American",
    //     image: "Fried Chicken.jpg",
    //     calories: "727cal",
    //     fats: "33g",
    //     carbs: "61g",
    //     protein: "43g",
    //     isLowCalorie: false,
    // },
    {
        name: "Mac&Cheese",
        category: "American",
        image: "Mac&Cheese.jpg",
        calories: "198cal",
        fats: "5g",
        carbs: "22g",
        protein: "10g",
        isLowCalorie: true,
    },
    {
        name: "Mac&Cheese",
        category: "American",
        image: "Mac&Cheese.jpg",
        calories: "508cal",
        fats: "16g",
        carbs: "55g",
        protein: "27g",
        isLowCalorie: false,
    },
    // {
    //     name: "Milk Tea Boba",
    //     category: "dessert",
    //     image: "Milk Tea Boba.jpg",
    //     calories: "75cal",
    //     fats: ".4g",
    //     carbs: "17.8g",
    //     protein: ".02g",
    //     isLowCalorie: true,
    // },
    // {
    //     name: "Milk Tea Boba",
    //     category: "dessert",
    //     image: "Milk Tea Boba.jpg",
    //     calories: "540cal",
    //     fats: "2g",
    //     carbs: "133g",
    //     protein: "2g",
    //     isLowCalorie: false,
    // },
    {
        name: "Flan",
        category: "dessert",
        image: "Flan.jpg",
        calories: "202cal",
        fats: "7g",
        carbs: "28g",
        protein: "7g",
        isLowCalorie: true,

    },
    {
        name: "Flan",
        category: "dessert",
        image: "Flan.jpg",
        calories: "350cal",
        fats: "10g",
        carbs: "57g",
        protein: "10g",
        isLowCalorie: false,
    },
    {
        name: "Cookies",
        category: "dessert",
        image: "Cookies.jpg",
        calories: "96cal",
        fats: "5g",
        carbs: "15g",
        protein: "2g",
        isLowCalorie: true,
    },
    {
        name: "Cookies",
        category: "dessert",
        image: "Cookies.jpg",
        calories: "183cal",
        fats: "8g",
        carbs: "26g",
        protein: "2g",
        isLowCalorie: false,
    },
    // {
    //     name: "Apple Pie",
    //     category: "dessert",
    //     image: "Apple Pie.jpg",
    //     calories: "57cal",
    //     fats: "2g",
    //     carbs: "6g",
    //     protein: "3g",
    //     isLowCalorie:true,
    // },
    // {
    //     name: "Apple Pie",
    //     category: "dessert",
    //     image: "Apple Pie.jpg",
    //     calories: "379cal",
    //     fats: "17g",
    //     carbs: "55g",
    //     protein: "3g",
    //     isLowCalorie: false,
    // },
    // {
    //     name: "Sticky rice mango",
    //     category: "dessert",
    //     image: "Sticky rice mango.jpg",
    //     calories: "170cal",
    //     fats: "8g",
    //     carbs: "23g",
    //     protein: "2g",
    //     isLowCalorie: true,
    // },
    // {
    //     name: "Sticky rice mango",
    //     category: "dessert",
    //     image: "Sticky rice mango.jpg",
    //     calories: "817cal",
    //     fats: "26g",
    //     carbs: "144g",
    //     protein: "8g",
    //     isLowCalorie: false,
    // },
]);

await Body.deleteMany();

// Insert body plans
const bodyDocs = await Body.insertMany([
    { plan: 'Cutting', foods: [], isLowCalorie: true },
    { plan: 'Bulking', foods: [], isLowCalorie: false },
]);

console.log('Body plans seeded');

// Fetch all foods
const allFoods = await Food.find();

// Assign foods to body plans
for (const food of allFoods) {
    if (food.isLowCalorie) {
        await Body.updateOne({ plan: 'Cutting' }, { $push: { foods: food._id } });
    } else {
        await Body.updateOne({ plan: 'Bulking' }, { $push: { foods: food._id } });
    }
}
console.log("foods seeded");

await User.deleteMany();

await User.create({
    firstName: "Lifting",
    lastName: "Larry",
    email: "liftinglarry@Marco.com",
    password: "13145qqq"
});




console.log("user seeded")

process.exit();

})