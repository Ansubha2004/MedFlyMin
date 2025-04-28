import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Homepage/Home.jsx';
function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        }></Route>
      </Routes>
    </>

  )
}

export default App
