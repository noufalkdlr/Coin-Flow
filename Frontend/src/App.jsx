import Coin from './pages/Home/Coin';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className=" min-h-screen text-white bg-gradient-to-br from-[#08203e] to-[#285068] ">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinID' element={<Coin/>}/>
          

        </Routes>

    </div>
  )
}