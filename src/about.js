const about = document.createElement("div")
about.id = "about";
const about_head = document.createElement("h1")
about_head.id = "about-head"
about_head.textContent = "About Us"
const about_text1 = document.createElement("p")
const about_text2 = document.createElement("p")
about_text1.textContent = "Jija’s Kitchen started as a tiny apartment pop-up where late-night cravings turned into test-kitchen rituals. Friends kept coming back for “just one more bite,” and those kitchen-table experiments became our menu: smash burgers with lacy edges, Philly cheesesteaks loaded and melty, blistered margherita pizzas, and cozy bowls of chicken Alfredo. We cook like family—simple ingredients, hot griddles, fresh dough, real butter and cream—done with care and a little swagger."
about_text2.textContent = "We believe great food should feel like home: welcoming, unpretentious, and made to share. From the first sizzle of a patty to the basil on a pizza fresh from the oven, everything here is made to order. Come hungry, leave happy, and bring a friend—there’s always a seat and a warm plate waiting at Jija’s Kitchen."
about.appendChild(about_head)
about.appendChild(about_text1)
about.appendChild(about_text2)

export { about }