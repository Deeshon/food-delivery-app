import Header from "./components/Header";
import Home from "./pages/Home";
import Layout from './Layout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
