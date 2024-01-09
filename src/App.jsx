import Home from './Pages/Home/home';
import Pokemon from './Pages/Pokemon/Pokemon';
import Header from './Partials/Header/Header';
import Footer from './Partials/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
