import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between border-b-2 border-gray p-4 mb-4">
      <h1 className="text-5xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
