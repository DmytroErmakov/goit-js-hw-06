// Створить окремий елемент <li>. Обов'язково використовуй
//  метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у
//  список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const option = ingredients[];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const itemEl = document.createElement("li");
  itemEl.textContent = option;
  itemEl.classList = "item";
  return itemEl;
});

ingredientsList.append(...elements);
console.log(ingredientsList);
// console.log(elements);
