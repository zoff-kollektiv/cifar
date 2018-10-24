const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const absPath = node.fileAbsolutePath.split('/');
    const folder = absPath[absPath.length - 2];
    const fileName = absPath[absPath.length - 1];

    createNodeField({
      node,
      name: 'fileName',
      value: fileName
    });

    createNodeField({
      node,
      name: 'folder',
      value: folder
    });
  }
}
