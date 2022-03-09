let vm = Vue.createApp({
    data() {
        return {
            favColor: "red", 
            bio: "", //empty will be populated by user
            bioPlaceholder: "Put your life story here",
            state: "Iowa",
            stateArray: [
                { label: "Iowa", abbr: "IA"},
                { label: "Minnesota", abbr: "MN"},
                { label: "Wisconsin", abbr: "WI"}
            ]

            //demo code
            // title: "Todo Items",
            // newItem: "",
            // newItemPriority: "low",
            // todoItems: [
            //     {
            //         label: "deploy to server",
            //         id: 0,
            //         priority: "high"
            //     },
            //     {
            //         label: "review new projects",
            //         id: 1,
            //         priority: "medium"
            //     },
            //                     {
            //         label: "create wireframes for x",
            //         id: 2,
            //         priority: "low"
            //     }
            // ]
        }
    }
}).mount("#app");