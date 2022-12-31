import _ from "lodash";
import myName from "./myName";
import printMe from "./print";

function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");
	// use your function!
	const myNameElement = document.createElement("div");

	myNameElement.textContent = myName("Cody");
	// Lodash, now imported by this script
	// element.innerHTML = _.join(["Hello", "webpack"], " ");

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;
	myNameElement.appendChild(btn);

	return myNameElement;
}

document.body.appendChild(component());
