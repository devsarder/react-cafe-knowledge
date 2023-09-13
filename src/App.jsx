import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="max-w-6xl m-auto">
        <Header></Header>
        <main>
          <section className="md:flex gap-2">
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
