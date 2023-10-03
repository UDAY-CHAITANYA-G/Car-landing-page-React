import React, { useEffect, useState } from "react";
import Cars from "./Cars";

import cars from "../../data/Cars";
import "./styles.css";
const LENGTH = cars.length;

export default function Home(){
    const [page,setPage] = useState(1);
    const [data,setCards] = useState([]);
    useEffect(()=>{
        const last = page*6;
        const data = cars.filter((car)=>{return car.id>last && car.id<last+7});
        setCards(data); 
    },[page])
    return (
    <div>
        <div className="Search-bar">
            <input type="text" placeholder="Search"></input>           
        </div>
        <Cars cars={data}/>
        <div className="Pagination">
            <div className="page-view-number">
               {page*6<=LENGTH && <a>{page*6} from {LENGTH}</a>}
            </div>
            <div className="pagination-number">
                <button onClick={()=>{setPage((page)=>{return page-1})}} style={{visibility : page === 1 && "hidden" }}> {"<"} </button>
                <button onClick={()=>{setPage(page)}}>{page}</button>
                <button onClick={()=>{setPage(page+1)}} style={{ visibility : page+1 >= 11 && "hidden" }}>{page+1}</button>
                <button onClick={()=>{setPage(page+2)}} style={{ visibility : page+2 >= 11 && "hidden" }}>{page+2}</button>
                {page < 8 && <button>.</button> }
                {page < 8 && <button onClick={()=>{setPage(10)}}>10</button>}
                <button onClick={()=>{setPage((page)=>{return page+1})}} style={{ visibility : page+2 >= 10 && "hidden" }}> {">"} </button>
            </div>
        </div>
    </div>);
}