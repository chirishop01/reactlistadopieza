import React, { useState,useEffect } from 'react'
import { PiezaCxt } from './PiezaCxt'


const Piezas = ({children}) => {



  const [piezasArray, setPiezasArray] = useState([])

    useEffect(() => {  
        fetchPiezas()
    }, [])
    
   

    const fetchPiezas=async()=>{

            console.log('Comenzo el fetch')
            const piezas = Parse.Object.extend('piezas');
            const query = new Parse.Query(piezas);
            try {
              const results = await query.find();
              const tempArray = [];
           
              

                // Use Promise.all to wait for all asynchronous operations to complete
                 await Promise.all(results.map(async (object) => {
                 const temp = {
                 name: object.get('name'),
                 details: object.get('details'),
                 phone: object.get('phone'),
                 municipio: object.get('municipio'),
                 brand: object.get('brand'),
                 part: object.get('part'),
                 provincia: object.get('provincia')
                   };

                   tempArray.push(temp);
                   }));

                   //setPiezasArray(piezasArray=>[...piezasArray,tempArray])
                   setPiezasArray(tempArray)
                   console.log(tempArray)
                
           
                


            } catch (error) {
              console.error('Error while fetching piezas', error);
            }
        
      


    }





    return (
      <PiezaCxt.Provider value={{piezasArray}}>
        {children}
      </PiezaCxt.Provider>
      )
  
}

export default Piezas
