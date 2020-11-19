//task-01
const showQuantity = selector => console.log(` В списке ${document.querySelector(selector).children.length} категории`);
showQuantity("#categories");

const itemsRef = Array.from(document.querySelectorAll(".item"));

itemsRef.map(item => console.log(` Категория: ${item.querySelector("h2").textContent}. 
 Количество элементво: ${item.querySelector("ul").children.length}`));
