import _ from "lodash";
import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";

function component() {
	const element = document.createElement("div");
	// use your function!
	const myNameElement = document.createElement("div");
	myNameElement.classList.add("hello");

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Icon;

    myNameElement.appendChild(myIcon);
	myNameElement.textContent = myName("Cody");
	// Lodash, now imported by this script
	// element.innerHTML = _.join(["Hello", "webpack"], " ");

	return myNameElement;
}

document.body.appendChild(component());
