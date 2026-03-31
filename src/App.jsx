import './App.css'
import { fetchDataList } from './services/api/getRecipesList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Favoris from './pages/favoris/favoris.jsx';
import Detail from './pages/list/detail/detail.jsx';
import List from './pages/list/list.jsx';
import NavBar from './components/Navbar/Navbar.jsx';

export default function App() {

  fetchDataList()

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

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
