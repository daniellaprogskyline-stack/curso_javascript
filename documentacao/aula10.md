Aula 10
Nesta aula, ele revisou o DOM (Document Object Model), que é a estrutura que permite ao JavaScript acessar e modificar os elementos de uma página HTML. Ele relembrou que cada página possui sua própria árvore DOM, formada por elementos pais (parent) e filhos (child), e também revisou as principais formas de selecionar elementos:

getElementsByTagName()
getElementById()
getElementsByName()
getElementsByClassName()
querySelector()

Depois da revisão, ele começu a ensinar sobre eventos DOM. Eventos são ações que acontecem em um elemento da página, como clicar, mover o mouse ou passar o cursor sobre ele.

click - clique do mouse.
mouseenter - quando o mouse entra no elemento.
mousemove - quando o mouse se move dentro do elemento.
mousedown - quando o botão do mouse é pressionado.
mouseup - quando o botão é solto.
mouseout - quando o mouse sai do elemento.

Para tratar esses eventos, o professor explicou o conceito de funções. Uma função é um bloco de código que só será executado quando for chamado.

function clicar() {
    // código executado ao clicar
}

Foi criado um exemplo prático usando uma div chamada "Interaja". Quando o usuário passava o mouse ou clicava nela, o texto e a cor do elemento mudavam. Isso mostrou como usar JavaScript para modificar o conteúdo e o estilo de um elemento através de propriedades como:

innerText
innerHTML
style.background

A aula apresentou duas formas de associar eventos:

Pelo HTML
<div onclick="clicar()">
Pelo JavaScript (mais recomendado)
a.addEventListener('click', clicar)

O método addEventListener() deixa o HTML mais organizado, concentrando toda a lógica no JavaScript.

Na segunda parte da aula, foi criado um pequeno sistema de soma utilizando:

Dois campos de entrada (input).
Um botão.
Uma área para mostrar o resultado.

O JavaScript capturava os valores digitados, convertia-os para número usando Number(), realizava a soma e exibia o resultado na tela.

O professor destacou a importância de converter os valores para número, pois os dados digitados nos inputs são recebidos inicialmente como texto.

Por fim, a aula ensinou a usar o DevTools do navegador para identificar erros de JavaScript. Através da aba Console, é possível visualizar mensagens de erro e descobrir exatamente em qual linha do código o problema aconteceu.