## Condições (Parte 2) - Curso JavaScript #12

Nesta aula, o professor retoma o assunto de estruturas condicionais e aprofunda o conteúdo apresentando as condições aninhadas. Ele explica que esse tipo de estrutura ocorre quando uma condição é inserida dentro de outra, ou seja, quando existe um bloco if dentro de outro bloco if ou else. Essa técnica é utilizada quando uma decisão depende do resultado de uma condição anterior.

Para demonstrar o conceito, o professor desenvolve exemplos práticos que exigem múltiplas decisões, como sistemas de votação, classificação por idade e verificação de horários. Esses exemplos ajudam a entender como o programa pode seguir diferentes caminhos de acordo com diversas condições avaliadas em sequência.

Condição aninhada:

if (condicao1) {
    if (condicao2) {
        // comandos
    }
}

Depois disso, professor introduz a condição múltipla, implementada em JavaScript por meio da estrutura switch. Diferentemente do if, que permite criar expressões mais complexas, o switch é utilizado quando se deseja comparar uma variável ou expressão com vários valores fixos.

A estrutura básica é apresentada da seguinte forma:

switch (expressao) {
    case valor1:
        // comandos
        break;

    case valor2:
        // comandos
        break;

    default:
        // comandos padrão
}

O professor destaca a importância do comando break, responsável por interromper a execução do switch após encontrar o caso correspondente. Sem ele, o programa continuaria executando os blocos seguintes, o que geralmente não é o comportamento desejado.

Por fim, ele explica que o switch é mais limitado do que as estruturas if e else, pois trabalha melhor com comparações de valores específicos. No entanto, em situações onde existem várias opções fixas, ele torna o código mais organizado, legível e fácil de manter.

A aula é continua com exemplos práticos para demonstrar quando utilizar condições aninhadas e ou estrutura switch.
