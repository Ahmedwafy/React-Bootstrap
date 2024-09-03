//  The following line can be included in your src/index.js or App.js file 
// this line for style 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Clients from './Components/Clients/clients';
import Navbar  from "./Components/Navbar/Navbar";  
import Flight from "./Components/Flight/flight"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/clients' element={<Clients/>}></Route>
          <Route path='/flight' element={<Flight/>}></Route>
          {/* <Home/> */}
          {/* <About/> */}
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;