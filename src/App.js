import './App.css';
import Home from "./pages/Home/Home";
import {Link, Route, Routes} from "react-router-dom";
import Product from "./pages/Product/Product";
import Header from "./components/Header/Header";
import ModalBox from "./components/Modal/ModalBox";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/product/:id'} element={<Product/>}/>
          </Routes>
      </div>
        <ModalBox/>
        <Cart/>
    </div>
  );
}

export default App;
