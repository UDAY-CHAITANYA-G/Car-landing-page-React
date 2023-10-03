import React, { useEffect, useState } from "react";
import Cars from "./Cars";
import Dropdown from "./Dropdown";

import cars from "../../data/Cars";
import "./styles.css";
const LENGTH = cars.length;

export default function Home(){
    const [page,setPage] = useState(1);
    const [data,setCards] = useState([]);
    const [search,setSearch] = useState("");
    const [length,setLength] = useState(LENGTH);

    const changeSearch = (e)=>{
        setSearch(e.target.value);
        setPage(1);
    }
    
    useEffect(()=>{
        const last = page*6;
        let data = search === "" ? cars : cars.filter((car)=>{return car.Name.toLowerCase().includes(search.toLowerCase())});
        setLength(data.length);
        data = data.filter((car,index)=>{return index+6>=last && index+6<last+6});   
        setCards(data);
    },[page,search])


    return (
    <div>
        <div className="Search-bar">
            <input type="text" placeholder="Search" value={search} onChange={changeSearch}></input>           
            <Dropdown />
        </div>
        <Cars cars={data}/>
        <div className="Pagination">
            <div className="page-view-number">
               {page*6<=length && <a>{page*6} from {length}</a>}
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