import React from "react";

export const SearchBox = ({searchBoxOnChange})=>{
    return(
        <div className="pa2">
            <input className="pa3 bg-lightest-blue ba b--green" type="search" placeholder="Search Robots" onChange={searchBoxOnChange}/>
        </div>
    )
}