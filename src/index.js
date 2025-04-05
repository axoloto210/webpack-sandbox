import "./style.css";
import Icon from "./woop_org.png";
// import printMe from "./print.js";

// function getComponent() {
// 	return import("lodash")
// 		.then(({ default: _ }) => {
// 			const element = document.createElement("div");

// 			element.innerHTML = _.join(["Hello", "webpack"], " ");

// // Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = Icon;

// element.appendChild(myIcon);

// 			return element;
// 		})
// 		.catch((error) => "An error occurred while loading the component");
// }

async function getComponent() {
	const element = document.createElement("div");
	const { default: _ } = await import("lodash");

	element.innerHTML = _.join(["Hello", "webpack"], " ");
	// element.onclick = Print.bind(null, 'Hello webpack!')

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

getComponent().then((component) => {
	document.body.appendChild(component);
});
