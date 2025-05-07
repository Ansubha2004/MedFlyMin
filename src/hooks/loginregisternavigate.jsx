
import {useNavigate} from 'react-router-dom';

export function loginregisternavigate(mode) {
    const navigate=useNavigate();
    const reload=(e)=>{
      e.preventDefault();
      if(mode=="register")
        navigate("/login");
      else
      navigate("/register");
      window.location.reload();
    }
    return reload

}
