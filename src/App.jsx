import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Homepage/Home.jsx';
import Registerlogin from './pages/Registerloginpage/Registerlogin.jsx';
import Orderpage from './pages/OrderPage/Orderpage.jsx';

function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        }></Route>
        <Route path="/register" element={
          <>
            <Registerlogin/>
          </>
        }></Route>
        <Route path="/login" element={
          <>
            <Registerlogin/>
          </>
        }></Route>
        <Route path="/orderpage" element={
          <>
          <Orderpage/>
          </>
        }></Route>
      </Routes>
    </>

  )
}

export default App
