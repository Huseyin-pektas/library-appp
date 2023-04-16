import React from "react";

const Button = ({ text = "", type = "primary", style={}, onClick = () => { }, className = "" }) => {
    return (
        
  <button style={style} type="" onClick={onClick} className={` btn btn-${type} ${className}`} >{text}</button>
        
    )
}

export default Button;
