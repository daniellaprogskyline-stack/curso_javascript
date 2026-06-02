## Operadores (Parte 2) - Curso JavaScript #08

Aqui aprendemos mais tipos de operadores do JavaScript. Depois de estudar os operadores aritméticos e de atribuição na aula anterior, vimos os operadores relacionais, lógicos e o operador ternário.
Os operadores relacionais servem para comparar valores. O resultado dessas comparações sempre será true (verdadeiro) ou false (falso).

Principais operadores:

>   // maior que
<   // menor que
>=  // maior ou igual
<=  // menor ou igual
==  // igual
!=  // diferente
exemplos no node:
5 > 2     // true
7 < 4     // false
8 >= 8    // true
5 == 5    // true
4 != 4    // false

Também aprendemos que existe diferença entre:

==   // compara apenas o valor
===  // compara valor e tipo

5 == "5"   // true
5 === "5"  // false

Também aprendemos operadores lógicos, eles servem para combinar condições.

AND (&&) Todas as condições precisam ser verdadeiras.
idade >= 18 && salario > 2000

OR (||)Basta uma condição ser verdadeira.
estado == "GO" || estado == "DF"

NOT (!) Inverte o resultado.

!true   // false
!false  // true

Eles são usados para validar informações em sistemas e tomar decisões dentro do programa.

Ele também citou que quando vários operadores aparecem na mesma expressão, existe uma ordem que o JavaScript segue.

Primeiro vêm os operadores aritméticos:

Parênteses
Potência
Multiplicação, divisão e módulo
Soma e subtração

Depois:

Operadores relacionais
Operadores lógicos

Dentro dos operadores lógicos:

NOT (!)
AND (&&)
OR (||)

Por isso é importante usar parênteses quando necessário para evitar resultados inesperados.

exercicio no node.js

var nome = "Dani"
var idade = 20
var salario = 2500

console.log(idade >= 18)
// true

console.log(salario > 2000 && idade >= 18)
// true

console.log(nome == "Dani")
// true

console.log(nome === "dani")
// false

var status = idade >= 18 ? "Maior de idade" : "Menor de idade"

console.log(status)
// Maior de idade