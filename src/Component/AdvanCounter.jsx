import React, { useState } from 'react'

function AdvanCounter() {
    const [count, setCount] = useState(0)
    const [value, setvalue] = useState()
    const HandleClick=()=>{
        if(count<100)
        setCount(count+value)
   
    }
    const HandleClickDIc=()=>{
        if(count>0)
        setCount(count-value)
    }



    
   
  
    return (
        <>
            <div className='h-72 w-96 bg-slate-500 m-auto'>
                <h1 className='text-3xl font-bold text-center'>UseState Challange</h1>
                <p className='m-5 text-xl'>count:{count}</p>
            
                <input 
                type="number" 
                value={value}
                onChange={(e)=>setvalue(Number(e.target.value))}
                />


               <div>
                <button className='p-2 bg-red-400 m-2 rounded-md' onClick={HandleClick}>Increatment</button>
                <button className='p-2 bg-red-400 m-2 rounded-md' onClick={HandleClickDIc}>decreatment</button>
                <button className='p-2 bg-red-400 m-2 rounded-md' onClick={()=>setCount(0)}>resset</button>
               </div>

            </div>
        </>
    )
}

export default AdvanCounter