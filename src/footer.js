import ln from "./assets/linkedin.svg"
import ig from "./assets/instagram.svg"
import tw from "./assets/twitter.svg"
const footer = document.createElement("div");
const name = document.createElement("div");
const location = document.createElement("div");
const number = document.createElement("div");
const email = document.createElement("div");
const socials = document.createElement("div");
const copyrwrite = document.createElement("div")
const linkedin = document.createElement("img")
const instagram = document.createElement("img")
const twitter = document.createElement("img")


///name 
name.id = "name"
name.textContent = "Jija's Kitchen"

//location
location.id = "location"
location.textContent = "80 Brock Rd S, Aberfoyle, Ontario, Canada, N1H 6H9"

//number
number.id = "number"
number.textContent = "(519) 763-1070"

// email
email.id = "email"
email.textContent = "info@jijaskitchen.com"

// socials
linkedin.src = ln
twitter.src = tw;
instagram.src = ig;
socials.id = "socials"
socials.appendChild(linkedin)
socials.appendChild(twitter)
socials.appendChild(instagram)

// copywrite 
copyrwrite.id = "copywrite"
copyrwrite.textContent = "© 2025 Jija's Kitchen."





footer.appendChild(name)
footer.appendChild(location)
footer.appendChild(number)
footer.appendChild(email)
footer.appendChild(socials)
footer.appendChild(copyrwrite)

footer.id = "footer"






export {footer}