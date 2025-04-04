import c1 from "./c1.js"
import c2 from "./c2.js"
export default function Home(dados){
    const z =
    `
    <h1>Pagina home</h1>
    <p>Aqui existe uma pagina inicial</p>
    <p>Esreva oq quiser pagina inicial</p>
    <p>o nome  ${dados.nome} e a idade ${dados.idde}</p>
    <p>o nome  ${ c1()} e a idade ${c2()}</p>


    `
    return z


}