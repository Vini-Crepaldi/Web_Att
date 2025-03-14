import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import divisao from "./divisao.js";

let op =4
const n1 = 5
const n2 = 5
switch (op) {
    case 1:
        console.log(somar(n1,n2))
        break;
    case 2:
        console.log(subtrair(n1,n2))
        break;
    case 3:
        console.log(multiplicar(n1,n2))
        break;
    case 4:
        console.log(divisao(n1,n2))
        break;
    default:
        break;
}