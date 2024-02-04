import React from 'react'

import useForm from './useForm'

const Formulario = () => {


    const initialform={
        name:'',
        phone:'',
        details:'',
        municipio:'',
        brand:'',
        part:'',
        provincia:''
    
        
       }
    const {formState,handleChange,name,phone,details,municipio,provincia,brand,part}=useForm(initialform)
   
    
    const onSubmitt=(event)=>{
        event.preventDefault()
        console.log(formState)


      const enviar=  async () => {
            const myNewObject = new Parse.Object('piezas');
            myNewObject.set('name', name);
            myNewObject.set('details', details);
            myNewObject.set('phone', phone);
            myNewObject.set('provincia', provincia);
            myNewObject.set('municipio', municipio);
            myNewObject.set('brand', brand);
            myNewObject.set('part', part);
            myNewObject.set('done', false);
            try {
              const result = await myNewObject.save();
              // Access the Parse Object attributes using the .GET method
              console.log('  creado correctamente en el SERVIDOR', result);
            } catch (error) {
              console.error('Error while creating piezas: ', error);
            }
          };

          enviar()



    }


  return (
    <div>
      



      <form className='container' onSubmit={onSubmitt}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nombre y Apellidos</label>
    <input
    value={name}
    name='name'
    type="text" className="form-control" onChange={handleChange} ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Numero de Telefono</label>
    <input 
    name='phone'
    value={phone}
    type="text" className="form-control" onChange={handleChange} ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Pieza</label>
    <input
    value={part}
    name='part'
    type="text" className="form-control" onChange={handleChange} ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Detalles</label>
    <input
    value={details}
    name='details'
    type="text" className="form-control" onChange={handleChange
    } ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Marca</label>
    <input
    value={brand}
    name='brand'
    type="text" className="form-control" onChange={handleChange
    } ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Municipio</label>
    <input 
    value={municipio}
    name='municipio'
    type="text" className="form-control" onChange={handleChange
    } ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Provincia</label>
    <input
    value={provincia}
    name='provincia'
    type="text" className="form-control" onChange={handleChange
    } ></input>
  </div>
 

  <button  type="submit" className="btn btn-primary">Submit</button>
</form >











    </div>
  )
}

export default Formulario
