import { useState } from "react";

function Search(){
    const [text, setText] = useState("Hola React");

    return (
        <div>
            <h1>{ text }</h1>
            <button onClick={() => setText("Bienvenido React")}>Click</button>
        </div>
    )
}

export default Search;
