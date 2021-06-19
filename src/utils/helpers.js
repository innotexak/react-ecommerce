// helper functions

export function homeFeatured(info) {
  const featured = info.filter((item) => item.featured === true);
  return featured;
}
