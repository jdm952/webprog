//select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

//put an h1 inside of it
//create a new element
let heading = document.createElement("h1");
heading.innerHTML = "click me to change background to llamas' favorite color";

//make it clear that clicking the heading does something
heading.style.cursor = "pointer";

//make clicking the heading change the background color
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "purple";
}

