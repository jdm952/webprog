//using lodash library
const headline = document.querySelector("#target");
const newText = _.startCase(headline.innerHTML);
headline.innerHTML = newText;

//setting up a vue class
//first we added vue script tag to html file
const vm = new Vue( {
    el: "#vueTarget", //el stands for element, the one we're attaching the vue to. if doing a class we'd use a dot instead of #
    data: {
        myName: "Jessica",
        pet: "cat"
    }
})