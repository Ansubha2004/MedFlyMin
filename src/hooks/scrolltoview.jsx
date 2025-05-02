import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function scrolltoview() {
    
    const location=useLocation();
    useEffect(()=>{
        setTimeout(()=>{
            if(location.hash)
                {
                    const element=document.querySelector(location.hash);
                    if(element)
                    {
                        element.scrollIntoView({behavior:'smooth'});
                    }
                }
        },100)
    },[location]);
}
