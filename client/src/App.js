import Header from "./components/Header";
import Home from "./pages/Home";
import Layout from './Layout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./pages/Menu";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Stock from "./pages/Stock"
import { UserContextProvider } from "./UserContext";


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/profile/:id' element={<Profile />}></Route>
            <Route path='/stock' element={<Stock />}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
