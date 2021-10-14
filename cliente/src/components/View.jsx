import React from 'react';
import { Link } from "react-router-dom";

const View = (props) => {
    return (
        <>
        <div className="tgview">
             <h3 className="tituloview">{props.item.title}</h3>
             <img src={props.item.Portada} alt="" width="100" height="150" className="imgview"/>
             {/* <p className="precioview">{props.item.Precio}€</p> */}
             <p className="desview">{props.item.desc}</p>
        </div>
             <button className="volver">
             <Link to={'/'}>Volver</Link>
         </button>
         </>
    )
}

export default View
