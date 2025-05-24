import { useEffect, useState } from "react";

export default function Clock (){
    const [counter,setCounter] = useState(0);

    useEffect(()=> {
       const key = setInterval(()=>{
            setCounter((counter)=> counter +1)
        },1000);

        return ()=> {
            clearInterval(key)
        }

},[])
  

    return (
        <p>{counter} seconds have pgdghhassssggggsggsDSSSSSfgkhdfddhdhddhdgassed.</p>
    )
}