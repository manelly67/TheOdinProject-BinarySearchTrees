function generateRandomArrayLess100(arrLength) {
    return Array.from({ length: arrLength }, () =>
      Math.floor(Math.random() * 100)
    );
  }

function generateRandomArray100to1000(arrLength) {
    return Array.from({ length: arrLength }, () =>
        Math.floor((Math.random() * 900) + 100)
    );
  }

export {generateRandomArrayLess100,generateRandomArray100to1000};