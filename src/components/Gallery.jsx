import { useState } from "react";
import { sculptureList } from "../data/sculpturedata";

export default function Gallery(){
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false);

    const handleClick = ()=> {
        setIndex(index + 1);
    }

    const handleMoreClick = ()=> {
        setShowMore(!showMore);
    }

    let sculputre = sculptureList[index];

    return (
        <>
        <button onClick={handleClick}>Next</button>
        <h2>
            <i>{sculputre.name}</i> by {sculputre.artist}
        </h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <button onClick={handleMoreClick}>{showMore?'Hide':'Show'} details</button>
        <img src={sculputre.url} alt={sculputre.alt} />
       { showMore && <p>{sculputre.description}</p>}
        </>
    )
}