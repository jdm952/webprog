Vue.createApp({
    data() {
        return {
            myNumbers: [1, 4, 17, 84],
            animals: [
                {name: "panda", color: "black and white"},
                {name: "dog", color: "brown"},
                {name: "fox", color: "orange"}
            ],
            myDog: {
                name: "Max",
                breed: "pittbull",
                color: "brown"
            }
        }
    }
}).mount("#app")