Vue.createApp({
    data() {
      return {
        llamasUrl: "https://en.wikipedia.org/wiki/Llama",
        alpacasUrl: "https://en.wikipedia.org/wiki/Alpaca",
        assignment: "far out",
        llamaFacts: {
            coolness: "are the coolest",
            life: "live forever",
            skill: "kick butt"
        },
        alpacaFacts: {
            coolness: "are punks",
            life: "are mere mortals",
            skill: "can't even fly"
        },
        alpacaStyle: {
            color: "red",
            "font-family": "Courier New",
            "font-size": "small",
        }
      }
    }
  }).mount('#app')
