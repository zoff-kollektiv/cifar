import slugify from 'slugify';

const options = {
  lower: true
};

export default text => slugify(text, options);
