import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <div className="max-w-6xl m-auto">
        <Header></Header>
        <main>
          <section className="md:flex gap-2">
            <Blogs handleBookmarks={handleBookmarks}></Blogs>
            <Bookmarks
            bookmarks={bookmarks}>
              
            </Bookmarks>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
