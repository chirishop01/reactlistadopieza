import React from 'react'
import { useContext } from 'react'
import { PiezaCxt } from './PiezaCxt'




const Tabla = () => {

  const { piezasArray } =  useContext(PiezaCxt)


  return (
    <>
  <h1>Tabla de la app</h1>
  <br></br>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Nombres Apellidos</th>
        <th scope="col">Marca</th>
        <th scope="col">Pieza</th>
        <th scope="col">Detalles</th>
        <th scope="col">Telefono</th>
      </tr>
    </thead>
    <tbody>
     

    {
  piezasArray.map(item => (
    <tr key={item.name}>
       <td>{item.name}</td>
      <td>{item.brand}</td>
      <td>{item.part}</td>
      <td>{item.details}</td>
      <td>{item.phone}</td>
    </tr>
  ))
}
    </tbody>
  </table>
  
  
  <br></br>



  <button onClick={()=>{
      console.log('Tocar aqui boton');
      console.log(piezasArray)
      console.log(typeof(piezasArray))
    }}
      >Mostrar consola
      </button>  
      </>
  )
}

export default Tabla
