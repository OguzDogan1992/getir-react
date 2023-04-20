import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Navlink } from "react-router-dom";
import Home from './Pages/Home';
import Products from './Pages/Products';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/products"  element={<Products />} ></Route>
        <Route path="/" element={<y />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
