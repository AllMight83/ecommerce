
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import One from './One';
import './pagination.css'






const BookList = () => {


    const [libro, setLibro] = useState([]);

    const [libros, setLibros] = useState([]);
    const [search, setSearch] = useState("");

    const [ordenar, setOrdenar] = useState([])
    const [ordenar2, setOrdenar2] = useState([])

    //Estados para la paginación;
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id))
    }

    const pages = [];
    for(let i=1; i<=Math.ceil(libro.length/itemsPerPage); i++){
        // console.log(libro.length)
        // console.log(itemsPerPage)
        pages.push(i)
        
    }



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = libro.slice(indexOfFirstItem, indexOfLastItem)


    const renderPageNumbers = pages.map(number => {
        return (
            <li 
            key={number} 
            id={number} 
            onClick={handleClick}
            className={currentPage === number ? "active" : null}>
                {number}
            </li>
        )
    })

    useEffect(
        async function axiosData() {
          
          try{
              const res = await axios.get('http://localhost:5000/api/libros');
              setLibro(res.data);
              setLibros(res.data);
              setOrdenar(res.data);
              setOrdenar2(res.data)
        
            
          }catch(e){
            setLibro([libro])
          } 
        },
        []
      );






      const printLibro = (libro) => {
        return libro.map((item, i)=> <One 
        item={item} 
        key={item._id} 
        />)
        
      }
      

      const handleChange = (event) => {
        setSearch(event.target.value)
        filtrarResultado(event.target.value)
      }

      const filtrarResultado = (input) => {
        let resultadoBusqueda = libros.filter((item) => {
          if(item.title.toString().toLowerCase().includes(input.toLowerCase())){
            return item
          }
        });
         setLibro(resultadoBusqueda)
      }

      const filtrar = () => {
         ordenar.sort((a, b) => {
          return a.Precio - b.Precio
          
        })
       
      }

      

  

      const filtrar2 = () => {
        ordenar2.sort((a, b) => {
         return b.Precio - a.Precio
       })
       
     }
 

    return (
            
        <>

<ul className="pagination">
                 {renderPageNumbers}
            </ul>
        
            <form action="/api/libros" method="GET">
                <input 
                className="buscar"
                type="text" 
                value={search}
                onChange={handleChange}
                autoFocus
                placeholder="Busca un libro..."
                />
                {/* <input type="submit" value="buscar"/> */}
            </form>
            <div>
          
            <div>
            <div className="botones">
            <button className="btn1"
        onClick={() => {
          let newSortedList = filtrar(ordenar)
          
          setOrdenar(newSortedList)
          
          
        }}
      >
        Más baratos
      </button>
      <button className="btn2"
        onClick={() => {
          let newSortedList2 = filtrar2(ordenar2)
          setOrdenar2(newSortedList2)
        
          
        }}
      >
        Más caros
      </button>

          </div>
      



            </div>
            {printLibro(currentItems)}
            <ul className="pagination">
                 {renderPageNumbers}
            </ul>
               <div>
                 
               </div>

              {libro.length === 0 && <h3>SIN RESULTADOS</h3>}
    
        </div>
    </>
    )
}

export default BookList
