import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import { showCiudadanos } from './components/showCiudadanos'
import CiudadanosComponent from './components/CiudadanosComponent ';
import AddCiudadanoComponent from './components/AddCiudadanoComponent';
import VacanteComponent from './components/VacanteComponent';
import EditCiudadanoComponet from './components/EditCiudadanoComponet';


function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path = '/' element = {<CiudadanosComponent/>}> </Route>
        <Route path = '/addCiudadano' element = {<AddCiudadanoComponent/>}> </Route>
        <Route path = '/vacante' element = {<VacanteComponent/>}> </Route>
        <Route path = '/editCiudadano' element = {<EditCiudadanoComponet/>}> </Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
