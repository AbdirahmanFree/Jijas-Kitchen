import "./style.css"
import { header } from "./header";
import { footer } from "./footer";
// Creating sections
const body = document.querySelector("body");
const container = document.createElement("div");



// Adding Id's to our main sections
container.id = "container";

// addind our main dections to the dom
container.appendChild(header)
container.appendChild(footer)
body.appendChild(container)





