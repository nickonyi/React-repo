import { useState } from "react";
import { sculptureList } from "../data/sculpturedata";

export default function Gallery(){
    const [index,setIndex] = useState(0);

    const handleClick = ()=> {
        setIndex(index + 1);
    }

    let sculputre = sculptureList[index];

    return (
        <>
        <button onClick={handleClick}>Next</button>
        <h2>
            <i>{sculputre.name}</i> by {sculputre.artist}
        </h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <img src={sculputre.url} alt={sculputre.alt} />
        <p>{sculputre.description}</p>
        </>
    )
}