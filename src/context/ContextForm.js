import {  createContext, useContext, useState } from "react";

export const FormContext = createContext();
 export const ContextProvider = ({children})=>{
    const [FormOne , SetFormOne] = useState('');
      function handleForm(item) {
       SetFormOne(item);
      }
  const [product , setproduct] =useState('All')
  function handleproduct(i){
    setproduct(i)
    console.log(i);
  }
  const [name ,  setName] = useState()
  return (
    <FormContext.Provider
      value={{
        FormOne,
        handleForm,
        product,
        handleproduct,
        setName,
        name,
      }}
    >
      {/* {console.log(getValue)} */}
      {children}
    </FormContext.Provider>
  );
 };

 export const useForm =()=>{
    return useContext(FormContext)
 }
