import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import AddCiudadanoComponent from './AddCiudadanoComponent';
import { Axios } from 'axios';


const VacanteComponent = () => {
    
    const [vacanteData, setVacanteData] = useState(null);

    useEffect(() => {    
        const fetchData = async () => {
          try {
            const response = await fetch('https://localhost:7175/VacantesGetAsync');
            const data = await response.json();
            setVacanteData(data);        
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []); 



      if (!vacanteData) {
        return <p>Cargando datos...</p>;
      }
    
      
      return (
        <div className='row mt-3'>
            <div className='col-12 col-lg-8 offset-0 offset-2'>
                <div className='table-responsive'>
                    <center> <h1>Lista de Vacantes</h1> </center>
    
                    <table className='table table-bordered'>
                        <thead>
                            <tr>                                
                                <th>Codigo</th>
                                <th>Cargo</th>
                                <th>descripcion</th>
                                <th>empresa</th>
                                <th>salario</th>
                                <th>Estado</th>
                                <th>Ciudadano</th>
                                <th>
                                    <button onClick={() => window.location.href = '/'}>Ciudadanos</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {vacanteData.vacantesOfertadas.map(vacantes => (
                                <tr key={vacantes.idVacante}>
                                
                                <td>{vacantes.codigo}</td>
                                <td>{vacantes.cargo}</td>
                                <td>{vacantes.descripcion}</td>
                                <td>{vacantes.empresa}</td>
                                <td>{vacantes.salario}</td>
                                <td>{vacantes.state}</td>
                                <td>{vacantes.idCiudadano}</td>
                                
                                
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
      );
    };


export default VacanteComponent