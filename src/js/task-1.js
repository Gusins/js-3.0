const list = document.querySelector("#categories");
const items = document.querySelectorAll(".item");
console.dir(`Number of categories ${list.children.length}`);
items.forEach(a => {
	console.log(`Category: ${a.firstElementChild.textContent}`);
	console.log(`Elements: ${a.lastElementChild.children.length}`);
});