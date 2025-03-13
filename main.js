import {find, search, save, edit, remove} from "./api.js";

const obj = {
	name: "manuel santiago",
	lastname: "larrotta meneses",
	age: 18,
	email: "manuel@gmail.com",
	rol: ["user", "admin"],
    id: 1
}

const message = await edit(obj)
console.log(message);