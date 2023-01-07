# Frontend Mentor - Loopstudios landing page

## Bem vindo! 👋

Este é um desafio Frontend Mentor!

## O desafio

Meu desafio foi criar esta landing page da Loopstudios tentando se aproximar o máximo possível da versão sugerida. Neste projeto utilizei a metodologia Mobile First, onde começo a desenvolver toda a marcação por telas de menor à maior dimensão. Além disso, utilizei o pré processador SASS/SCSS para a estilização do HTML.

Você pode conferir o desafio na própria página do Frontend Mentor:
[Loopstudios landing page](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

## Mobile

![loopstudios mobile](https://user-images.githubusercontent.com/109925623/211121533-97ad6386-af1f-48e5-ab0d-486b200cc40c.png)

## Desktop

![loopstudios desktop](https://user-images.githubusercontent.com/109925623/211121495-55fc8b51-a984-4a53-a0b7-99a0372d87af.png)


### O que eu aprendi

Neste projeto pude me desafiar a manipular as Mixins que são nada mais que funções que você pode atribuir parâmetros para estilizar elementos que são iguais ou parecidos, evitando assim a repetição de código. As Mixins ainda permitem condicionais IF e ELSE. Para a chamada das funções, basta usar @include( ) com ou sem argumentos.

- @mixin

``` scss
    @mixin titulo {
    text-transform: uppercase;
    padding: 1em 0;
    font-size: $tamanho-texto * 2;
    font-weight: 300;
    }

    @mixin botao {
        text-decoration: none;
        text-transform: uppercase;
        border: 1px solid $cor-secundaria;
        padding: 0.5em 2.5em;
        font-size: 14px;
        font-family: $fonte-secundaria;
        letter-spacing: 3px;
        font-weight: 400;
    }

    @mixin reponsivo($tamanho) {
        @if $tamanho == tablet {
            @media screen and (min-width: 930px) { @content; }
        } @else if $tamanho == desktop {
            @media screen and (min-width: 1024px) { @content; }
        } @else if $tamanho == largeDesktop {
            @media screen and (min-width: 1440px) { @content; }
        } @else if $tamanho == tv {
            @media screen and (min-width: 1720px) { @content; }
        }

    }

    @mixin redes($endereco) {
        background-image: url($endereco);
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        height: 24px;
        width: 24px;
        position: relative;
    }

    @mixin flutuacao($largura, $posicao) {
        content: '';
        width: $largura;
        height: 2px;
        position: absolute;
        left: $posicao;
        top: 150%;
        background-color: $cor-principal;
    }
```

- @include

``` scss
    .sobre__titulo {
                @include titulo();
                @include reponsivo(desktop) {
                    text-align: left;
                    padding: 0 0 0.5rem 0;
                    max-width: 25rem;
                }
                @include reponsivo(largeDesktop) {
                    font-size: $tamanho-texto * 2.5;
                }
    }
```





