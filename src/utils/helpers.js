import URL from './URL';
// helper functions
export function homeFeatured(info) {
  const featured = info.filter((item) => item.featured === true);
  return featured;
}

// flatten
export function flattenedProducts(data) {
  // console.log(data);
  return data.map((item) => {
    // console.log(item.image[0].url);
    let image = `${URL}${item.image[0].url}`;
    console.log(image);
    // console.log(image);
    return { ...item, image };
  });
}
