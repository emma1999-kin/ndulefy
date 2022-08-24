import './App.css'
import Bibliotheque from './components/Bibliotheque';
import Connexion from "./components/Connexion";
import { Routes, Route } from 'react-router-dom';
import Recherche from "./components/Recherche";



function App() {

  return (
  <>
       <Routes>
        <Route path="/" element={<Connexion/>} />
        <Route path="/bibliotheque" element={<Bibliotheque />} />
        <Route path="/recherche" element={<Recherche/>}/>
        <Route path="/playlist" element={<Recherche/>}/>
        <Route path="/prefere" element={<Recherche/>}/>
       </Routes>
  </>)
}

export default App;
