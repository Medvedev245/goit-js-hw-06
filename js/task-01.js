const title = document.querySelector("#categories");
console.dir(`Number of categories: ${[...title.children].length}`);

[...title.children].forEach((child) => {
  console.log(`Category: ${child.children[0].textContent}`);
  console.log(`Elements: ${child.children[1].children.length}`);
});
