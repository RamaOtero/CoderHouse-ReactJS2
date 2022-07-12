import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import News from './views/News';
import Cart from './views/Cart';

function App() {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/' element={<ItemListContainer greetings="| Welcome" />} />
          <Route path='/item/:userID' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
