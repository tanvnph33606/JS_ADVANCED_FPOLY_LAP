function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;

    image.onload = () => {
      document.querySelector(".image").replaceWith(image);
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error("Error loading image"));
    };
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

createImage("path/to/your/image1.jpg")
  .then((image) => {
    return delay(2000)
      .then(() => {
        image.style.display = "none";
        return createImage("path/to/your/image2.jpg");
      })
      .then((newImage) =>
        delay(2000).then(() => (newImage.style.display = "none"))
      );
  })
  .catch((error) => console.error(error));
