import React from 'react'

function Input (props) {
  let {
    value, 
    type, 
    name, 
    error, 
    placeholder, 
    handleChange,
    classname
  } = props;

  let className = error ? `${classname} input-error` : classname;
  placeholder = error ? error : placeholder;
  return (  
  <input 
    className = {className}
    type={type} 
    name={name} 
    value= {value}
    placeholder={placeholder} 
    onChange ={handleChange}
  />)        
}

export default Input