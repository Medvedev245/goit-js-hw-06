const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.map((el) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = el;
  console.log(li);
  list.append(li);
});

console.log(list);

// На кожній ітераціі додаю лішку в ДОМ. Здається
// потрібно додати кудись, а тотім додати в дом.
// але мізків не вистачає )
