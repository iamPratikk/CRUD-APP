import React,{useReducer} from 'react'

const initialValue=0;
const reducer= (state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialValue;    
    }

}

function Practice() {
  
  
  const [count,dispatch]= useReducer(reducer,initialValue)
    return (

    <div>
        <h1>count-{count}</h1>
        <input onClick={()=>dispatch('increment')}>increment</input>
        <input onClick={()=>dispatch('decrement')}>decrement</input>
        <input onClick={()=>dispatch('reset')}>Reset</input>
    </div>
  )
}

export default Practice