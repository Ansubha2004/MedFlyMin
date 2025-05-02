import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export function loginregistermode() {
    const location=useLocation();
    const [mode,setmode]=useState("");
    useEffect(()=>{
     if(location.pathname=="/register")
        {
            setmode("register");
        }
        else
        {
         setmode("login");
        }
    
    },[location.pathname])

    return mode;
  
}
