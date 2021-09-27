import Layout from "../components/Layout"
export default function Jsx(){

    const titulo =  <h1>JSX é um conceito Central</h1>
    function subtitulo() {
        return <h2>{"Javascript".toLocaleUpperCase()}</h2> 
        
    }
    return (
        <Layout titulo="Entendendo o JSX">

       
        <div>
            {titulo}
             {subtitulo()}
             {JSON.stringify(
                 {nome: "alessandro",
                  idade: 49})}
        </div>
        </Layout>
    )
}