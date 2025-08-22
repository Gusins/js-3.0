class Storage {
	#items;
	constructor(items) {
		this.#items = items;
	};
	getItems() {
		return this.#items;
	}
	addItem(str) {
		this.#items.push(str);
	}
	removeItem(str) {
		if (!this.#items.includes(str)) {
			return;
		}
		this.#items.splice(this.#items.indexOf(str), 1);
	}
}




// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


