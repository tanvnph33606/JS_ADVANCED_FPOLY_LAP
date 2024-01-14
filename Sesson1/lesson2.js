const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// or

game.scored.forEach((element, index) => {
  console.log(`Goal ${index + 1}: ${element}`);
});

// 2

let averageOdds = 0;
for (const odd of Object.values(game.odds)) {
  averageOdds += odd;
}
averageOdds /= Object.values(game.odds).length;
console.log(`Average odds: ${averageOdds.toFixed(2)}`);

// or
const sum = Object.values(game.odds).reduce((a, b) => a + b, 0);
console.log(sum);
average = sum / Object.values(game.odds).length;
console.log(average.toFixed(2));

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team == "x" ? "Draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${teamName}: ${odd}`);
}
console.log(Object.entries(game.odds));
// 4

const scorers = {};
for (const player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
