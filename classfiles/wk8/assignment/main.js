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
            ],
            newFlower: {
                name: "",
                type: "",
                color: "",
                height: "",
                image: ""
            }
        }
    },
    methods: {
        submitHandler() {
            this.flowers = this.flowers.concat(this.newFlower);
            this.newFlower = {
                name: "",
                type: "",
                color: "",
                height: "",
                image: ""
            };
        },
        isValid() {
            return this.newFlower.name && this.newFlower.type && this.newFlower.color && this.newFlower.height && this.newFlower.image;
        },
        deleteFlower (item) {
            this.flowers = this.flowers.filter(flower => {
                return flower !== item;
            });
        }
    }
}).mount("#app");


