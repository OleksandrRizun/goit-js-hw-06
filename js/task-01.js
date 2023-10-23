const categoryItems = [...document.getElementById("categories").children]
console.log(`Number of categories: ${categoryItems.length}\n\n`);
categoryItems.forEach(elem => console.log (`Category: ${elem.firstElementChild.textContent} \nElements: ${elem.getElementsByTagName("li").length}`))