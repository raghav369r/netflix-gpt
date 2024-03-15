import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handlelogout = () => {
    if (user) {
      dispatch(removeUser());
      logout();
    }
    navigate("/login");
  };

  return (
    <div className="w-full px-5 z-10 absolute bg-gradient-to-b from-black">
      <div className="flex justify-between p-4">
        <h1 className="text-red-700 text-4xl font-bold">NETFLIX</h1>
        {user && <SearchBox />}
        <button
          className="text-white px-4 py-2 rounded hover:bg-red-500 bg-red-900"
          onClick={handlelogout}
        >
          {user ? "Sign out" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Header;
