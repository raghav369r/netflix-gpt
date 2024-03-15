import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/auth";
import { getUser } from "../services/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "./Header";

function Login() {
  const [newUser, setNewUser] = useState(true);
  const [error, setError] = useState("");

  const user = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const loggedUser = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) navigate("/browse");
  }, [loggedUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.current?.value === "") {
      user.current.focus();
      return;
    }
    if (email.current.value === "") {
      email.current.focus();
      return;
    }
    if (password.current.value === "") {
      password.current.focus();
      return;
    }

    let err;
    if (!newUser) {
      err = await login({
        email: email.current.value,
        password: password.current.value,
      });
    } else {
      err = await register({
        name: user.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    }
    setError(err);
    // console.log(error);
    if (!err) {
      dispatch(addUser(getUser()));
      navigate("/browse");
    }
  };

  return (
    <div className="">
      <img
        className="fixed w-full h-full object-cover"
        alt="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <Header />
      <form className="p-9 mt-[15%] md:mt-32 w-[80%] md:w-3/12 mx-auto right-0 left-0 absolute bg-black text-white opacity-85">
        <h1 className="font-bold text-3xl my-2">
          {newUser ? "Sign In" : "Login"}
        </h1>
        {newUser && (
          <input
            ref={user}
            className="bg-gray-900 p-2 my-2 w-full focus: "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="bg-gray-900 p-2 my-2 w-full"
          type="text"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="bg-gray-900 p-2 my-2 w-full"
          type="password"
          placeholder="Password"
        />
        {error && <p className="text-red-900">{error}</p>}
        <button
          className="p-3 my-3 w-full bg-red-800 hover:bg-red-600"
          onClick={handleSubmit}
        >
          Sign in
        </button>
        <p
          className="cursor-pointer hover:underline"
          onClick={() => {
            setNewUser(!newUser);
            setError("");
          }}
        >
          {newUser ? "Already a User? Login" : "New To Netflix? Sign In"}
        </p>
      </form>
      {/* <img className="w-19 m-6 absolute" alt="logo" src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"/> */}
    </div>
  );
}

export default Login;
