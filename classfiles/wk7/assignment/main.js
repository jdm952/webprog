Vue.createApp({
    data() {
        return {
            flowers: [
                {
                    name: "Black-Eyed Susan",
                    type: "Perennial",
                    color: "Yellow",
                    height: "Medium",
                    image: "img/blackeyedsusan.jpg" 
                },
                {
                    name: "Coneflower",
                    type: "Perennial",
                    color: "Purple",
                    height: "Medium",
                    image: "img/coneflower.jpg" 
                },
                {
                    name: "Marigold",
                    type: "Annual",
                    color: "Multicolor",
                    height: "Short",
                    image: "img/marigold.jpg"
                },
                {
                    name: "Shasta Daisy",
                    type: "Perennial",
                    color: "White",
                    height: "Medium",
                    image: "img/daisy.jpg"
                },
                {
                    name: "Sunflower",
                    type: "Annual",
                    color: "Yellow",
                    height: "Tall",
                    image: "img/sunflower.jpg"
                },
                {
                    name: "Zinnia",
                    type: "Annual",
                    color: "Multicolor",
                    height: "Medium",
                    image: "img/zinnia.jpg"
                }
            ]
        }
    }
}).mount("#app");


