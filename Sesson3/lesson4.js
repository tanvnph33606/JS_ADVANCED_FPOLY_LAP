const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Yêu cầu 1
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Yêu cầu 2
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `${sarahDog.owners.join(" and ")}'s dog eats ${
    sarahDog.curFood > sarahDog.recommendedFood ? "too much!" : "too little!"
  }`
);

// Yêu cầu 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

// Yêu cầu 4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// Yêu cầu 5
const exactAmount = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(`Any dog eats the exact amount: ${exactAmount}`);

// Yêu cầu 6
const reasonableAmount = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(`Any dog eats a reasonable amount: ${reasonableAmount}`);

// Yêu cầu 7
const dogsWithReasonableAmount = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log("Dogs with reasonable amount:", dogsWithReasonableAmount);

// Yêu cầu 8
const sortedDogs = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log("Sorted dogs by recommended food:", sortedDogs);
