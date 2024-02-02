import React, { useState, useEffect } from 'react';

const EditCiudadanoComponet = () => {
    const [ciudadano, setCiudadano] = useState({
        idCiudadano: 0,
        tipoDocumento: 0,
        cedula: 0,
        nombres: 'string',
        apellidos: 'string',
        fechaNacimiento: '2024-02-02T19:59:46.606Z',
        profesion: 'string',
        aspiracionSalarial: 0,
        correoElectronico: 'string',
      });
    
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoApellido, setNuevoApellido] = useState('');

    useEffect(() => {        
        fetch('https://localhost:7175/CiudadanosGetIdAsync?vIdCiudadano=3')
          .then((response) => response.json())
          .then((data) => setCiudadano(data))
          .catch((error) => console.error('Error al obtener el ciudadano:', error));
      }, []);

    const handleNombreChange = (event) => {
    setNuevoNombre(event.target.value);
    };

    const handleApellidoChange = (event) => {
        setNuevoApellido(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch(`https://api-ejemplo.com/ciudadanos/${ciudadano.idCiudadano}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              
            },
            body: JSON.stringify({
              nombres: nuevoNombre || ciudadano.nombres,
              apellidos: nuevoApellido || ciudadano.apellidos,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Error al actualizar el ciudadano');
          }
    
          
          console.log('Ciudadano actualizado exitosamente');
        } catch (error) {
          console.error('Error:', error.message);
          
        }
      };
      


  return (
    <div>
      <h2>Editar Ciudadano</h2>
      <form onSubmit={handleSubmit}>
        <label>
          tipoDocumento:
          <input type="text" value={tipoDocumento} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
        cedula:
          <input type="text" value={nuevoApellido} onChange={handleApellidoChange} />
        </label>
        <br />
        <label>
          Nuevo Nombre:
          <input type="text" value={nuevoNombre} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
          Nuevo Apellido:
          <input type="text" value={nuevoApellido} onChange={handleApellidoChange} />
        </label>
        <br />
        <label>
        profesion:
          <input type="text" value={profesion} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
        aspiracionSalarial:
          <input type="text" value={aspiracionSalarial} onChange={handleApellidoChange} />
        </label>
        <br />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  )
}

export default EditCiudadanoComponet