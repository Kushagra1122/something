import { Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/Main';

import Navbar from './components/Navbar';
import Visit from './components/Visit';
function App() {
 

  return (
    <div className="bg-gradient-to-br from-teal-700 via-blue-800 to-purple-800">
      <Navbar />
      <div className="flex justify-center  h-screen w-screen  text-white font-serif">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/visit" element={<Visit/>} />
         
        </Routes>
      </div>
    </div>
  );
}

export default App
