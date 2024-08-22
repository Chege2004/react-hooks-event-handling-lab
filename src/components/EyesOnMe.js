// Code EyesOnMe Component Here
import React from "react";

export default function EyeOnMe() {
    const onFocus=()=>console.log("Good!");
    const onBlur=()=>console.log("Hey! Eyes on me!");
    return(
        <div>
            <button onFocus={onFocus} onBlur={onBlur}>Eyes on me</button>
        </div>
    ) 
}