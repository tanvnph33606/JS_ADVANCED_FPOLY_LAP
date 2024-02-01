const whereAmI = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Too many requests or other issue`
      );
    }

    const data = await response.json();

    console.log(data);

    const country = data.country;
    console.log(`You are in ${data.city}, ${country}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// Test Coordinates
const testCoordinates1 = { lat: 52.508, lng: 13.381 };
const testCoordinates2 = { lat: 19.037, lng: 72.873 };
const testCoordinates3 = { lat: -33.933, lng: 18.474 };

// Test the function with coordinates
whereAmI(testCoordinates1.lat, testCoordinates1.lng);
whereAmI(testCoordinates2.lat, testCoordinates2.lng);
whereAmI(testCoordinates3.lat, testCoordinates3.lng);
