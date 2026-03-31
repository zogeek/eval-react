import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/home/home"

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Layout />} >
              <Route path="" element={<List />} />
              <Route path=":id" element={<Details />} />
            </Route>
            <Route path="/favoris" element={<Favoris />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App