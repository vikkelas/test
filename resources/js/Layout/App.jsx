import React from "react";
import {createRoot} from "react-dom/client";

function App(){
    return(
        <div>
            hello world
        </div>
    )
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<App/>)
}
