## Repetições (Parte 1) - Curso JavaScript #13

Nessa aula ele apresenta o while, uma estrutura de repetição com teste lógico no início que serve para deixar o código mais curto e eficiente de acordo com a quantidade de vezes em que se espera repetir algo.

de início, ele exemplifica de uma forma mais simples utilizando fatias de pizza e uma function, como a seguir:

function comerPizza(){
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

A parte de comerFatia sendo a responsável por criar a repetição. Porém, logo em seguida, ele nos dá op exemplo de outra forma de ser feito, gerando o mesmo efeito só que deixando o código mais simples e direto.

function comerPizza(){
    while(temFatia()){
        comerFatia()
    }
}

Isso cria um tipo de loop onde ele só vai parar quando a condição "temFatia" for falsa.

Ele segue a aula fazendo o exercício 16.

Depois disso, ele ensina mais um bloco de comando:

do {

} while(condição)

Essa é uma estrutura de repetição com teste no final.
Vamos utilizar cada uma delas de acordo com o que o código ou a lógica pede.