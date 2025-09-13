import "./style.css"
import { header } from "./header";
import { footer } from "./footer";
import { home } from "./home";
// Creating sections
const body = document.querySelector("body");
const container = document.createElement("div");
const content = document.createElement("div");





// Adding Id's to our main sections
container.id = "container";
content.id = "content"

// addind our main dections to the dom
container.appendChild(header)
content.appendChild(home)
container.appendChild(content)
container.appendChild(footer)
body.appendChild(container)





