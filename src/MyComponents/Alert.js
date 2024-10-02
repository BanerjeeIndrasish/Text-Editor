import React from 'react'

export default function Alert(props) {
  const capitalizeAlertType = (word)=>{
    const text = word.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1); 
  }

  return (
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{background:`${props.alert.color}`}}>
        <strong>{capitalizeAlertType(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
