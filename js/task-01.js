const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, listCategories.length);
const listChild = document.querySelectorAll("h2");
// console.log(listChild);

const listItem = document.querySelectorAll(".item");
// console.log(listItem);

const countEl = listItem.forEach((el) => {
  const countItem = el.querySelectorAll("li");
  const nameItem = el.querySelector("h2").textContent;
  console.log(`Category: `, nameItem);
  
   console.log(`Elements: `, countItem.length);
});
