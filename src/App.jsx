import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Favoris from './pages/favoris/favoris.jsx';
import Detail from './pages/list/detail/detail.jsx';
import List from './pages/list/list.jsx';
import NavBar from './components/Navbar/Navbar.jsx';

export default function App() {


  return (

    <div className='app'>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/:id" element={<Detail />} />
            <Route path="/favoris" element={<Favoris />} />

          </Routes>
        </BrowserRouter>
    </div>
  )
}
