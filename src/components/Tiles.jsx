import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Tiles() {
  const [color,setColor]=useState("gray")
 
    function change(){
        let res=Math.floor(Math.random()*2)
        if(res==1) setColor("green")
          else{
            setColor("Red")
            setTimeout(() => alert("Game Over"),200)
            
          } 

    }

    return (
      <>
      <button className=' w-14 h-14 inline-block m-3'
       style={{backgroundColor:color}}
         onClick={change}
       
       
       ></button>
       </>

       
    )
}
