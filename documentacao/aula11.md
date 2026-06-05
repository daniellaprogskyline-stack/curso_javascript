## Condições (Parte 1) - Curso JavaScript #11

Após uma breve revisão dos conteúdos apresentados na aula anterior, o professor inicia o estudo das estruturas condicionais, um dos conceitos fundamentais da programação. Ele explica que os comandos de um programa nem sempre são executados de forma totalmente sequencial. Em diversas situações, é necessário avaliar determinadas condições para decidir qual caminho o programa deve seguir.

Para facilitar o entendimento, o professor compara o fluxo de um programa a um fluxograma. Em alguns pontos, o código encontra uma condição que gera uma bifurcação, permitindo que diferentes caminhos sejam seguidos dependendo do resultado obtido. Após a tomada de decisão, esses caminhos geralmente voltam a se encontrar em etapas posteriores da execução até que o programa alcance seu ponto final. Esse mecanismo é conhecido como desvio condicional e está presente na base de praticamente todas as linguagens de programação.

A aula tem como foco mostrar como representar esse tipo de fluxo utilizando JavaScript. Nos fluxogramas, as decisões costumam ser representadas por losangos, que indicam um ponto onde uma condição deve ser avaliada. Em JavaScript, essa lógica é implementada principalmente por meio das estruturas if e else.

O professor apresenta dois tipos básicos de condições:

Condição simples
if (condição) {
    // comandos
}

Nesse caso, existe apenas um caminho possível. Os comandos dentro do bloco serão executados somente se a condição for verdadeira.

Condição composta

if (condição) {
    // comandos se a condição for verdadeira
} else {
    // comandos se a condição for falsa
}

Nesse modelo, existem dois caminhos possíveis. O bloco if é executado quando a condição é verdadeira, enquanto o bloco else é executado quando a condição é falsa.

Para concluir a explicação, o professor demonstra o funcionamento dessas estruturas por meio de exercícios práticos, mostrando como as condições podem ser utilizadas para controlar o comportamento de um programa e tomar decisões de acordo com diferentes situações.

