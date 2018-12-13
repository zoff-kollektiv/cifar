export default (images, id) =>
  images.find(({ node: { parent: { absolutePath } } }) => {
    const normalizedId = id >= 10 ? id : `0${id}`;

    return (
      absolutePath.includes(`/${normalizedId}-`) ||
      absolutePath.includes(`/media/avatar`)
    );
  });
