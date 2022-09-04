import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import Item from './Components/Item/Item';
import Logo from './Assets/logo.png';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
    <div className='header'>Giphy Search App</div>
    <img className='img_logo' src={Logo} alt='logo'/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
