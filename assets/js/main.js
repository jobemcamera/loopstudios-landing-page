const cabecalho = document.querySelector('.cabecalho')
const botaoHamburguer = document.querySelector('.cabecalho__botao')
const navLista = document.querySelector('.nav__lista')


botaoHamburguer.onclick = () => {
    if (botaoHamburguer.classList.contains("active")) {
        botaoHamburguer.classList.remove('active')
        navLista.style.display = 'none'
    } else {
        botaoHamburguer.classList.add('active')
        navLista.style.display = 'flex'
    }
    
}