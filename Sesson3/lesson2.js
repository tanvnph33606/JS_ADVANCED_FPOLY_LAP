const checkDogs = (dogsJulia, dogsKate) => {
  const juliaCopy = [...dogsJulia];
  juliaCopy.splice(0, 2); //
  juliaCopy.splice(-2);

  console.log(juliaCopy);
  const allDogs = juliaCopy.concat(dogsKate);

  allDogs.forEach((age, index) => {
    const message =
      age >= 3
        ? `Chó số ${index + 1} là người lớn và ${age} tuổi`
        : `Chó số ${index + 1} vẫn là chó con và ${age} tuổi`;
    console.log(message);
  });
};

// TEST DATA 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// TEST DATA 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
