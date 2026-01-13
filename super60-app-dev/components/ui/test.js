const imageObjects = [];
const numberOfImages = 5; // You can adjust the number of image objects you want

for (let i = 0; i < numberOfImages; i++) {
  const width = Math.floor(Math.random() * (800 - 200 + 1)) + 200; // Random width between 200 and 800
  const height = Math.floor(Math.random() * (600 - 150 + 1)) + 150; // Random height between 150 and 600
  const randomId = Math.floor(Math.random() * 1000); // Random ID for a specific image from Lorem Picsum

  const imageUrl = `https://picsum.photos/id/${randomId}/${width}/${height}`;

  const imageObject = {
    id: i + 1,
    url: imageUrl,
    altText: `Random image ${i + 1}`,
  };

  imageObjects.push(imageObject);
}

console.log(imageObjects);