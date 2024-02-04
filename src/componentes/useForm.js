import React from 'react'
import { useState } from 'react'

const useForm = (initialform={}) => {

    const [formState, setformState] = useState(initialform)
       
       
        const handleChange = ({target})=>{
            console.log(target.name)
            console.log(target.value)
            const {name,value}=target
            setformState({...formState,[name]:value})
        }
    
  return ({...formState,formState, handleChange}
   
  )
}

export default useForm
