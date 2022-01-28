const myGames = [
    { title: "Monopoly", type: "board", numberOfPlayers: "2-4", rating: "3/5", shortDescription: "land on spaces, buy property, avoid jail"},
    { title: "Tag", type: "physical", numberOfPlayers: "infinite", rating: "4/5", shortDescription: "one person is It, they try to tag someone else It, play forever"},
    { title: "The Last of Us", type: "video", numberOfPlayers: "1", rating: "4/5", shortDescription: "play video game as main character, kill zombies, complete adventure mission"},
    { title: "War", type: "card", numberOfPlayers: "2-4", rating: "3/5", shortDescription: "each player lays down a card, highest card wins, winner takes card, repeat"},
    { title: "Operation", type: "board", numberOfPlayers: "2-4", rating: "2/5", shortDescription: "remove body parts from patient, try not to touch the sides or get buzzed"}
]
const yourNumber = window.prompt('I have 5 games in my collection. Pick a number between 1 and 5 and I will tell you about that game');
console.log("You selected " + myGames[yourNumber - 1].title + " which is a " + myGames[yourNumber - 1].type + " game. " + "You can play with " + myGames[yourNumber - 1].numberOfPlayers + " players. I give the game " + myGames[yourNumber - 1].rating + " stars. How to play: " + myGames[yourNumber - 1].shortDescription + ".");
window.alert("You selected " + myGames[yourNumber - 1].title + " which is a " + myGames[yourNumber - 1].type + " game. " + "You can play with " + myGames[yourNumber - 1].numberOfPlayers + " players. I give the game " + myGames[yourNumber - 1].rating + " stars. How to play: " + myGames[yourNumber - 1].shortDescription + ".");