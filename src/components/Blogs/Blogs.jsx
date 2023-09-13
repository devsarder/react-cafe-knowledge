import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Blogs = ({handleBookmarks}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 border-2 border-tomato">
      <h3>Total Blogs:{blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog key={blogs.id} blog={blog}
        handleBookmarks={handleBookmarks}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes ={
  Blogs:PropTypes.object.isRequired
}
export default Blogs;
