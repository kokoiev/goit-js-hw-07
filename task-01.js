//task-01
const showQuantity = selector => console.log(`В списке ${document.querySelector(selector).children.length} категории`);
showQuantity("#categories")

//task-02
const itemsRef = Array.from(document.querySelectorAll(".item"))
console.table(itemsRef.map(item => {return  ` Категория ${item.querySelector("h2").textContent} количество элементво ${item.querySelector("ul").children.length}`}))
