import './App.css'
import Bibliotheque from './components/Bibliotheque';
import Connexion from "./components/Connexion";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
  <>
       <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path="bibliotheque" element={<Bibliotheque />} />
      </Routes>
  </>)
}

export default App;
