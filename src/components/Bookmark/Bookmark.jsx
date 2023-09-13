/* eslint-disable react/prop-types */

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400 p-3 m-4 rounded-md">
      <h4 className="text-2xl bold">{title}</h4>
    </div>
  );
};

export default Bookmark;
