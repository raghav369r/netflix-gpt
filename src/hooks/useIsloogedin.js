import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../services/auth";

const useIsloggedin=()=>{
    const [user, setUser]=useState(null);
    const luser=getUser();
    setUser(luser);
    return [user, setUser];
}

export default useIsloggedin;