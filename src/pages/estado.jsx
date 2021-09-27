import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){

//usando o destructuring
const [numero, setNumero] = useState(0)

    function incrementar (){
        setNumero (numero + 1)
    }
    return(
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}