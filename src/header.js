import "./style.css"
import logo from "./assets/logo.png"
import account from "./assets/account.svg"
import cart from "./assets/cart.svg"

// The necessary dom elements
const header = document.createElement("div");
const toolbar = document.createElement("div");
const navBar = document.createElement("div");
const logoText = document.createElement("div");
const image = document.createElement("img");
const homeBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const aboutBtn = document.createElement("button")
const navBtns = document.createElement("div");
const toolImages = document.createElement("div");
const accountImage = document.createElement("img");
const cartImage = document.createElement("img");

// Adding Id's
header.id = "header";
toolbar.id = "toolBar-header";
navBar.id = "navBar-header";

// Tool Bar sectiorn
header.appendChild(toolbar);
toolImages.id = "tool-images";
accountImage.src = account;
cartImage.src = cart;
cartImage.classList.add("tool-image")
accountImage.classList.add("tool-image")
toolImages.appendChild(accountImage)
toolImages.appendChild(cartImage)
toolbar.appendChild(toolImages)


//Nav Bar section
header.appendChild(navBar)

// Logo and text
logoText.classList.add("flex")
logoText.id = "logo-section"
const smallText = document.createElement("div");
smallText.textContent = "Jija's Kitchen";
smallText.id = "logo-text"
image.src = logo
logoText.appendChild(image)
logoText.appendChild(smallText)
navBar.appendChild(logoText)

////// Nav button section

navBtns.classList.add("flex")
navBtns.id = "nav-btn-section"

//Home Button
homeBtn.classList.add("nav-btn")
homeBtn.id = "home";
homeBtn.textContent = "Home";
navBtns.appendChild(homeBtn)

// Menu Button
menuBtn.classList.add("nav-btn")
menuBtn.id = "menu";
menuBtn.textContent = "Menu";
navBtns.appendChild(menuBtn)

// About Button
aboutBtn.classList.add("nav-btn")
aboutBtn.id = "about";
aboutBtn.textContent = "About";
navBtns.appendChild(aboutBtn)

navBar.appendChild(navBtns)









export { header }