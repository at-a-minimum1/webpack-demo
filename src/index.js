import _ from "lodash";
import myName from "./myName";

function component() {
	const element = document.createElement("div");
	// use your function!
	const myNameElement = document.createElement("div");

	myNameElement.textContent = myName("Cody");
	// Lodash, now imported by this script
	// element.innerHTML = _.join(["Hello", "webpack"], " ");

	return myNameElement;
}

document.body.appendChild(component());
