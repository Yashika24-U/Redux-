import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment, decrement,reset,incrementAmount} from './counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    const[incrementamount,setIncrementamount] = useState(Number(0));

    const addValue = Number(incrementamount) || 0;

    const resetAll = ()=>{
        setIncrementamount(0);
        dispatch(reset())
    }
    
  return (
   <section>
    <p>{count}</p>
    <div>
        <button onClick={(()=>dispatch(increment()))}>+</button>
        <button onClick={(()=>dispatch(decrement()))}>-</button>

        <div>  <input type = "text" value = {incrementamount} onChange = {(e)=>setIncrementamount(e.target.value)} /></div>
       

        <div>
           <button onClick={()=>dispatch(incrementAmount(addValue))}>Add Amount</button>

        </div>
    
        <button onClick={resetAll}>Reset</button>
        
    </div>
   </section>
  )
}

export default Counter