export default (images, id) => {
  const image = images.find(({ node: { parent: { absolutePath } } }) => {
    const normalizedId = id >= 10 ? id : `0${id}`;
    return absolutePath.includes(`/media/${normalizedId}-`);
  });

  // if no image was found, return the default avatar
  if (!image) {
    return images.find(({ node: { parent: { absolutePath } } }) =>
      absolutePath.includes(`/media/avatar`)
    );
  }

  return image;
};
