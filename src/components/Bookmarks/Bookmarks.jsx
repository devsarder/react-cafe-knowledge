/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

// eslint-disable-next-line react/prop-types
const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks);

  return (
    <div className="w-1/3 border-2 border-black">
      <h2 className="text-3xl">Bookmarked Blog:{bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
