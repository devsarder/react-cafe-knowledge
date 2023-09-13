/* eslint-disable react/prop-types */
const Blog = ({blog}) => {
  console.log(blog);
  return (
    <div>
      <img src="" alt="" />
      <h3>Author:{blog.id}</h3>
    </div>
  );
};

export default Blog;
