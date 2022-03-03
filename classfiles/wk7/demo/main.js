// //Vue 2 way without build tools
// Vue.createApp({
//     data () {
//         return {greeting: "This is Vue 2"
//         }
//     }
// })

// //Vue 3 way without build tools
// Vue.createApp({
//     data( {

//     })
// })



Vue.createApp({
    data() {
        return {
            myAwesomeUrl: "https://nintendo.com",
            preferredMode: "dark",
            paragraphStyle: {
                fontSize: "36px",
                color: "blue"
            },
            thingsILike: {
                food: "Peanut Butter",
                color: "Orange",
                music: "jpop",
                movies: "sci fi"
            },
            cards: [
                {
                name: "Accursed Witch",
                type: "creature",
                text: "blah blah"
                },
                {
                name: "Max",
                type: "creature",
                text: "blah blah"
                },
                {
                name: "Hello",
                type: "Bug",
                text: "blah blah"
                },
            ]
        }
    }
}).mount("#myApp")