import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "./services/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { Provider } from "react-redux";
import userStore from "./utils/appStore";
import Header from "./components/Header";
import Login from "./components/Login";
import Error from "./components/Error";
import Browse from "./components/Browse";
import Home from "./components/Home";
import "./index.css";

const router=createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement:<Error/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/about",
    element:<Header/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
],);

function App() {

  const dispatch=useDispatch();

  useEffect(()=>{
    const user=getUser();
    if(user) dispatch(addUser(user));
  },[])
  return ( 
    <Provider store={userStore}>
      <RouterProvider router={router} />
    </Provider>
   );
}

export default App;
