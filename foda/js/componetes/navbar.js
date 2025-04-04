export default function NavBar(){
   const navnar = document.createElement("nav")
        navnar.innerHTML =`
                    <li><a href="#home">home</a></li>
                    <li><a href="#servicos">serviçoss</a></li>
                    <li><a href="#contato">contato</a></li>
               
        `

        return navnar;

}