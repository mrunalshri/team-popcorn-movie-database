import { useNavigate } from "react-router-dom";
import { SearchDetailsProvider } from "../../search_context";
import Search from "../Search/search";

import logo from "../../assets/images/team-popcorn-logo.png";
const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex w-screen h-20 mt-4">
      <div
        aria-label="logo"
        onClick={() => {
          navigate("/");
        }}
        className="flex-1 flex justify-center items-center mr-auto cursor-pointer"
      >
        <img alt="Man Eating Popcorn" src={logo} className="h-20" />
      </div>

      <div className="flex-1 flex justify-center">
        <SearchDetailsProvider>
          <Search />
        </SearchDetailsProvider>
      </div>

      <div className="flex-1 flex justify-center ml-auto text-lg">
        <button
          onClick={() => {
            navigate("/watchlist");
          }}
          className="mx-2"
        >
          My Watchlist
        </button>
      </div>
    </nav>
  );
};

export default Header;
