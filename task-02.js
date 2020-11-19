const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulIngredientsRef = document.querySelector("#ingredients")
ingredients.map(item => { const ingredientLi = document.createElement("li"); ingredientLi.textContent = item; ulIngredientsRef.append(ingredientLi) })

const title = document.createElement("h2");
title.textContent = "Список ингридиентов";
ulIngredientsRef.prepend(title);