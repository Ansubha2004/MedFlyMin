import React,{useNavigate} from 'react'

function navigatehook({link}) {

    //js
    const navigate = useNavigate();

    //js
    const handleClick = () => {
        navigate(link);
    };

}


export default navigatehook;