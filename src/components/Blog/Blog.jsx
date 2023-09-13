/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa";

const Blog = ({ handleBookmarks, blog }) => {
  const { title, author, posted_date, reading_time, hashtags } = blog;
  console.log(blog);
  return (
    <div className="mb-16">
      <img className="mb-6" src="" alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img src="" alt="" />
          <div>
            <p className="text-2xl bold ">{author}</p>
            <p>
              <small>{posted_date}</small>
            </p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read</span>
          <button onClick={()=>handleBookmarks(blog)} className="ml-2">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-3xl">{title}</h3>
      <div>
        {hashtags.map((tag, i) => (
          <span key={i}>
            <a href="">#{tag}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Blog;
