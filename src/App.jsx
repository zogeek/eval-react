import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/home.jsx';
import Favoris from './pages/favoris/favoris.jsx';
import Detail from './pages/list/detail/detail.jsx';
import Listes from './pages/list/list.jsx';


export default function App() {


  return (

    <div className='app'>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liste" element={<Listes />} />
            <Route path="/liste : id" element={<Detail />} />
            <Route path="/favoris" element={<Favoris />} />

          </Routes>
        </BrowserRouter>
    </div>
  )
}

