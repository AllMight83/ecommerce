
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import One from './One';
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import View from './View'


const Details = () => {

    const {id} = useParams()

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch(`http://localhost:5000/api/libros?_id=${id}`)
        const datos = await data.json()
        console.log(datos)
        setDatos(datos)

    }


    
    // const printCosas = () => {
    //     return datos.map((item) => {
    //         <p key={item._id}>{item.title}</p>
        
        
    //     })
    // }

    const printCosas = () => {
        return datos.map((item, i)=> <View
        item={item} 
        key={item._id} 
        />)
    }

   
    





    return (
        <>
        {/* <div>
            <p>Espero que funcione</p>
            <p>{datos.title}</p>
            
            <img src={datos.Portada} alt="" width="100" height="150"/>
            
            <p>{datos.desc}</p>
            <p>{datos.autor}</p>
            <Link to={'/'}>Volver</Link>
            
        </div> */}
        {printCosas()}
        </>
    )
}

export default Details
