import React from "react";
import "tachyons"

export const Navigation = ({handleSignOut})=>{
    return(
        <nav className="flex justify-end underline link sign-out-bg">
            <p onClick={handleSignOut} className="b f4 link dim black pa3 pointer">Sign Out</p>
        </nav>
    )
}