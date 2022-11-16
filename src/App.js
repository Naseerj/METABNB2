import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import Landingpage from './Landingpage/Landingpage';
import Places from './Places/Places'
import Footer from './Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
    <Navbar />
    <Routes>
   <Route  path='/' element={<Landingpage />}/>
   <Route  path='/places' element={<Places />}/>
    </Routes>
    <Footer />
     </BrowserRouter>
   
    </div>
  );
}

export default App;
