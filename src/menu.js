import burger from "./assets/smashBurger.jpg"
import philly from "./assets/phillyCheeseSteak.jpg"
import alfredo from "./assets/chickenAlfredo.webp"
import cheesePizza from "./assets/pizza.jpg"

const menu = document.createElement("div")
menu.id = "menu"

class FoodCard {
    constructor(name, ingredients, img_url, calories){
        this.name = name;
        this.ingredients = ingredients;
        this.img_url = img_url;
        this.calories = calories;
    }

    createCard() {
        const foodCard = document.createElement("div");
        foodCard.id = `${this.name}`;
        foodCard.classList.add("food-Card");
        const foodImage = document.createElement("img");
        foodImage.classList.add("food-Card-Image");
        foodImage.src = `${this.img_url}`;
        const name = document.createElement("h2")
        name.textContent = `${this.name}`
        const ingredients =  document.createElement("p");
        ingredients.textContent = `${this.ingredients}`;
        const calories = document.createElement("h3");
        calories.textContent = `Calories: ${this.calories}`;
        foodCard.appendChild(foodImage);
        foodCard.appendChild(name);
        foodCard.appendChild(ingredients);
        foodCard.appendChild(calories)
        menu.appendChild(foodCard)

    }
}
const smashBurger = new FoodCard(
    "Smash Burger",
    "ground beef (3 oz balls), salt and black pepper, Canadian cheese, soft buns (brioche), thin-sliced white onion, dill pickles, a quick smash sauce (mayo + ketchup + mustard), and a little butter for toasting the buns.",
    burger,
    "800"
)
const phillyCheeseSteak = new FoodCard(
    "Philly Cheese Steak",
    "Thin-sliced ribeye, sautéed onions, provolone, a soft hoagie roll, a touch of oil/butter, salt and pepper, mushrooms, peppers.",
    philly,
    "750"

)
const chickenAlfredo = new FoodCard(
    "Fettuccine Alfredo",
    "Fettuccine, sautéed chicken breast, butter, heavy cream, Parmesan, garlic, salt, pepper; finish with parsley.",
    alfredo,
    "820"
)
const margheritaPizza = new FoodCard(
    "Margherita Pizza",
    "Pizza dough, crushed tomatoes (lightly salted), fresh mozzarella, fresh basil, extra-virgin olive oil, pinch of salt; bake hot for a blistered crust.",
    cheesePizza,
    "720"
)

smashBurger.createCard()
phillyCheeseSteak.createCard()
chickenAlfredo.createCard()
margheritaPizza.createCard()






export { menu }