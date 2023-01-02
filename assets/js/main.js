const botaoHamburguer = document.querySelector('.cabecalho__botao')
const navLista = document.querySelector('.nav__lista')

let menuAberto = false;

botaoHamburguer.onclick = () => {
    if (!menuAberto) {
        console.log('ok')
        botaoHamburguer.style.backgroundImage = "url ('../../images/icon-close.svg')";
    } 
}