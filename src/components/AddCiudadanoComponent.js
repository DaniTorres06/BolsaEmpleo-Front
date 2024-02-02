import React, { useState } from 'react';

const AddCiudadanoComponent = () => {

  const [datosUsuario, setDatosUsuario] = useState({
    nombres: '',
    apellidos: '',
    correoElectronico: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realizar la solicitud POST a la API
    try {
      const response = await fetch('https://localhost:7175/CiudadanoAddAsync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
      });

      
      if (response.ok) {
        console.log('Registro exitoso');
        
      } else {
        console.error('Error en el registro');
        
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      
    }
  };


  return (
    <div className='row mt-3'>
      <center>
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="tipoDocumento">Tipo documento:</label>
          <input
            type="number"
            id="tipoDocumento"
            name="tipoDocumento"
            value={datosUsuario.tipoDocumento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cedula">Cedula:</label>
          <input
            type="number"
            id="cedula"
            name="cedula"
            value={datosUsuario.cedula}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={datosUsuario.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={datosUsuario.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fechaNacimiento">Fecha Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={datosUsuario.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="profesion">Profesion:</label>
          <input
            type="text"
            id="profesion"
            name="profesion"
            value={datosUsuario.profesion}
            onChange={handleChange}
            required
          />
        </div>        
        <div>
          <label htmlFor="aspiracionSalarial">aspiracionSalarial:</label>
          <input
            type="number"
            id="aspiracionSalarial"
            name="aspiracionSalarial"
            value={datosUsuario.aspiracionSalarial}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="correoElectronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={datosUsuario.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Registrar</button>
        <button onClick={() => window.location.href = '/'}>Ciudadanos</button>
      </form>
      </center>
    </div>
  )
}

export default AddCiudadanoComponent