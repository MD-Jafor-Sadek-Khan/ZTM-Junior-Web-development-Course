import React from "react";
import "tachyons"

export const Navigation = ()=>{
    return(
        <nav className="flex justify-end underline link sign-out-bg">
            <p className="b f4 link dim black pa3 pointer">Sign Out</p>
        </nav>
    )
}