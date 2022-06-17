import React from 'react';

 const Button=({color, onClick, text})=>{
    return <button onClick={onClick} style={{background:color}} className='btn'>{text}</button>
}
export default Button;