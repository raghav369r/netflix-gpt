import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Backend_url } from "../utils/constants";

const getJwttoken=()=>{
    return localStorage.getItem('token');
}

const setJwttoken=(token)=>{
    localStorage.setItem('token',token)
}

const getUser=()=>{
    const token=getJwttoken();
    if(!token) return;
    const user=jwtDecode(getJwttoken())
    // console.log(user);
    return user;
}

const login=async(data)=>{
    const {email, password}=data;
    try{
        const response = await axios.post(Backend_url+'auth/login', {
            email,
            password
        });
        setJwttoken(response.data);
        return;
    }catch(ex){
        let err=ex.response.data;
        if(ex.response.status===404) err="Server Error!! Try Again later";
        return err;
    }
}

const register=async(data)=>{
    const {name, email, password}=data;
    try{
        const response = await axios.post(Backend_url+'user/register', {
            name,
            email,
            password
        });
        setJwttoken(response.data.token);
        return;
    }catch(ex){
        let err=ex.response.data;
        if(ex.response.status===404) err="Server Error!! Try Again later";
        return err;
    }

}

const logout=()=>{
    localStorage.removeItem("token");
}

export {getJwttoken, getUser, logout, login, register};