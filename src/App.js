import logo from './logo.svg';
import Navbar from './Component/Navbar';
import {Route,Routes } from 'react-router-dom';
import Registration from './Component/Registration';
import Register from './Component/Register';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path ="/" element={<Navbar/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
