import React from "react";
import "tachyons"
export const Rank = ({user})=>{
    return(
        <div className="mt4" style={{color:"white"}}>
            <p className="f3 pa0 ma0">{user.name} your current Rank is....</p>
            <p className="f2 pa1 ma0">{user.count}</p>
        </div>
    )
}