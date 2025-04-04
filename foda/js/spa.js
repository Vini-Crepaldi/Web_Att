import NavBar from "./componetes/navbar.js"
import Home from "./componetes/home.js"
import Contato from "./componetes/contato.js"
import Servico from  "./componetes/servico.js"
document.querySelector("#navbar").appendChild( NavBar() )

const container = document.querySelector("main")
const pessoa ={
    nome: "KAique",
    idade: 525
}



//const urlParams = new URLSearchParams(window.location.search);
//for(const parametro  of urlParams){
   // console.log(parametro);
//}
console.log(window.location.hash)
console.log(location.ancestorOriginshash)

window.addEventListener("hashchange",()=>{
    if(location.hash === "#servicos"){
        document.querySelector("#main").innerHTML = Servico()
    }else if(location.hash === "#contato"){
        document.querySelector("#main").innerHTML =  Contato()
    }else{
        document.querySelector("#main").innerHTML = Home(pessoa)
    }
})