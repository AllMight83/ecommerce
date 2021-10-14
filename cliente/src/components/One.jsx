import React from 'react';
import { Link } from "react-router-dom";


const One = (props) => {
    return (
        <div className="results-busqueda">
             
             <h3 className="title">{props.item.title}</h3>
             <img src={props.item.Portada} alt={props.item.title} width="220" height="350" className="imagen"/>
             <p className="precio">{props.item.Precio}€</p>
             <p className="autor">{props.item.autor}</p>
             
             <button className="entrar">
            <Link to={`/${props.item._id}`}>Detalles</Link>
        </button>
            
        </div>

        
    )
}

export default One
