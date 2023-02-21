import './App.css';
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/Product/Product";
import Header from "./components/Header/Header";
import ModalBox from "./components/Modal/ModalBox";
import Cart from "./components/Cart/Cart";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
    </div>
  );
}

export default App;
