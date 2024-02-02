import React, {useEffect, useState} from 'react';
import { Axios } from 'axios';
import Swal from  'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { showAlert } from '../functions';


const ShowCiudadanos = () => {
    const url = 'https://localhost:7175/CiudadanoGetAsync';

    const [products,setProducts]= useState([]);
    

    
    useEffect( ()=>{
        getCiudadanos();
    },[]);

    
    const getCiudadanos = async() =>
    {
        /*
        const respuesta = await Axios.get(url);
        setproducts(respuesta.data);
        console.log(setproducts);
        */
       console.log("Dani");
    }
    /**/  

  return (
    <div>ShowCiudadanos</div>
  )
}

export default ShowCiudadanos