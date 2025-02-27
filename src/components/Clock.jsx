import { useState } from "react";

export default function Clock (){
    const [counter,setCounter] = useState(0);

    return (
        <p>{counter} seconds have passed.</p>
    )
}