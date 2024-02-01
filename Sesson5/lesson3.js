async function loadNPause(imgPath) {
  try {
    const image = await createImage(imgPath);
    await delay(2000);
    image.style.display = "none";

    const newImage = await createImage("path/to/your/image2.jpg");
    await delay(2000);
    newImage.style.display = "none";
  } catch (error) {
    console.error(error);
  }
}

// Test the function
loadNPause("path/to/your/image1.jpg");

async function loadAll(imgArr) {
  try {
    const promises = imgArr.map((imgPath) => createImage(imgPath));
    const imgs = await Promise.all(promises);

    console.log(imgs);

    imgs.forEach((img) => {
      img.classList.add("parallel");
    });
  } catch (error) {
    console.error(error);
  }
}

// Test the function
const imgArr = ["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"];
loadAll(imgArr);
