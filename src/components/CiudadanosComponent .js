import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import AddCiudadanoComponent from './AddCiudadanoComponent';
import { Axios } from 'axios';

const CiudadanosComponent = () => {

  const [ciudadanosData, setCiudadanosData] = useState(null);
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {    
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7175/CiudadanoGetAsync');
        const data = await response.json();
        setCiudadanosData(data);        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  const handleEliminarDato = async (id) => {
    try {
      // Realizar la solicitud DELETE
      const response = await fetch(`https://localhost:7175/CiudadanosGetIdAsync?vIdCiudadano=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {        
        setDatos((prevDatos) => prevDatos.filter((dato) => dato.id !== id));
      } else {
        setError('Error al eliminar el dato');
      }
    } catch (error) {
      setError('Error al realizar la solicitud de eliminación');
    }
  };

  

  
  if (!ciudadanosData) {
    return <p>Cargando datos...</p>;
  }

  // Mostrar datos en la interfaz de usuario
  return (
    <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-2'>
            <div className='table-responsive'>
                <center> <h1>Lista de Ciudadanos</h1> </center>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Profesión</th>
                            <th>Aspiración Salarial</th>
                            <th>Correo Electrónico</th>
                            <th>
                              <button onClick={() => window.location.href = '/addCiudadano'}>Agregar ciudadano</button>
                              &nbsp;
                              <button onClick={() => window.location.href = '/vacante'}>Vacantes</button>
                            </th>                            
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {ciudadanosData.ciudadanos.map(ciudadano => (
                            <tr key={ciudadano.idCiudadano}>
                            
                            <td>{ciudadano.nombres}</td>
                            <td>{ciudadano.apellidos}</td>
                            <td>{new Date(ciudadano.fechaNacimiento).toLocaleDateString()}</td>
                            <td>{ciudadano.profesion}</td>
                            <td>{ciudadano.aspiracionSalarial ?? 'No disponible'}</td>
                            <td>{ciudadano.correoElectronico}</td>
                            <td>
                                <button onClick={() => window.location.href = '/editCiudadano'} className='btn btn-warning>'>
                                    <i className='fa-solid fa-edit'></i>
                                </button>
                                &nbsp;
                                <button onClick={() => handleEliminarDato(ciudadano.idCiudadano)} className='btn btn-danger>'>
                                    <i className='fa-solid fa-trash'></i>
                                </button>
                            </td>                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default CiudadanosComponent;