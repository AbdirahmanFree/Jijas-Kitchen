import burger from "./assets/smashBurger.jpg"
import philly from "./assets/phillyCheeseSteak.jpg"
import alfredo from "./assets/chickenAlfredo.webp"
import cheesePizza from "./assets/pizza.jpg"

let itemIndex = 0

const hero = document.createElement("div");
hero.id = "hero"
hero.style.position = "relative"

const smashBurger = document.createElement("img");
smashBurger.id ="smash";
smashBurger.src = burger;
smashBurger.classList.add("food-image")

const phillyCheeseSteak = document.createElement("img");
phillyCheeseSteak.id = "philly";
phillyCheeseSteak.src = philly;
phillyCheeseSteak.classList.add("food-image")


const chickenAlfredo = document.createElement("img");
chickenAlfredo.id = "alfredo";
chickenAlfredo.src = alfredo;
chickenAlfredo.classList.add("food-image")

const pizza = document.createElement("img");
pizza.id = "pizza";
pizza.src = cheesePizza;
pizza.classList.add("food-image")



/// add burger to hero (default)
hero.style.backgroundImage = `url(${smashBurger.src})`

const foodWheel = [smashBurger, phillyCheeseSteak, chickenAlfredo, pizza]

// buttons to control which image we see
const nextBtn = document.createElement("button");
nextBtn.id ="next"
nextBtn.classList.add("button")
nextBtn.classList.add("button-up")
nextBtn.textContent = "→"
nextBtn.addEventListener("click", () => {
    nextImage();

})
nextBtn.addEventListener("mousedown", () => {
    nextBtn.classList.remove("button-up");
    nextBtn.classList.add("button-down");
})
nextBtn.addEventListener("mouseup", () => {
    nextBtn.classList.remove("button-down");
    nextBtn.classList.add("button-up");
})



const previousBtn = document.createElement("button")
previousBtn.id = "previous"
previousBtn.classList.add("button")
previousBtn.classList.add("button-up")
previousBtn.textContent = "←"

previousBtn.addEventListener("click", () => {
    previousImage();
})
previousBtn.addEventListener("mousedown", () => {
    previousBtn.classList.remove("button-up");
    previousBtn.classList.add("button-down");
})
previousBtn.addEventListener("mouseup", () => {
    previousBtn.classList.remove("button-down");
    previousBtn.classList.add("button-up");
})


hero.appendChild(previousBtn)
hero.appendChild(nextBtn)

function nextImage(){
    itemIndex+=1
    if (itemIndex >3) {
        itemIndex = 0
    }
    hero.style.backgroundImage = `url(${foodWheel[itemIndex].src})`
}

function previousImage(){
    itemIndex -=1
    if (itemIndex <0){
        itemIndex = 3
    }
     hero.style.backgroundImage = `url(${foodWheel[itemIndex].src})`

}

export { hero }





