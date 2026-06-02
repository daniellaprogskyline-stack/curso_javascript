## Operadores (Parte1) - Curso JavaScript #07


Nessa aula foi iniciada a parte de operadores em JavaScript. Ele explicou que existem várias famílias de operadores na linguagem, mas o foco ficou nos operadores aritméticos e nos operadores de atribuição. Os operadores aritméticos são usados para realizar cálculos matemáticos básicos, como soma (+), subtração (-), multiplicação (*), divisão (/), resto da divisão inteira (%) e potenciação (**), são conhecidos como binários, pois são sempre com 2: 2+5/4-5...

Foi mostrado que o operador % não calcula porcentagem, mas sim o resto de uma divisão inteira. Já o operador ** é utilizado para calcular potências, como por exemplo 5².
JavaScript segue uma ordem para resolver expressões matemáticas: primeiro os parênteses, depois as potências, em seguida multiplicações, divisões e restos da divisão, e por último somas e subtrações. Por isso, expressões como 5 + 3 / 2 podem gerar resultados diferentes do esperado caso a ordem das operações não seja considerada.

A aula também abordou os operadores de atribuição, que servem para armazenar resultados dentro de variáveis usando o sinal de igual (=). Foi mostrado que o símbolo = não significa igualdade matemática, mas sim que uma variável recebe determinado valor. Além disso, foram apresentadas as autoatribuições, em que uma variável recebe um novo valor baseado nela mesma.

Para simplificar operações repetitivas, o JavaScript permite utilizar operadores reduzidos como +=, -=, *=, /=, %=, e **=. Esses operadores tornam o código menor e mais fácil de ler, mas só funciona se for a mesma variável recebendo ela mesma: n = n-2/ n = n*2

Por fim, foram apresentados os operadores de incremento (++) e decremento (--), que servem para aumentar ou diminuir uma unidade de uma variável. 
x = x - 1
x = x + 1
Também foi comentado sobre pré-incremento e pós-incremento, mas sem aprofundar muito nesse momento, já que esse detalhe se torna mais importante em situações avançadas da programação.

var a = 5 + 3
var b = a % 5
var c = 5*b**2
var d = 10 - a/ 2
var e = 6*2/d
var f = b%e + 4 / e 


Os exercícios dessa aula foram feitos apenas pelo node.js
> var a = 5 + 3
undefined
> a
8
> var b = a % 5
undefined
> 
> var c = 5*b**2
undefined
> var d = 10 - a/ 2
undefined
> var e = 6*2/d
undefined
> var f = b%e + 4 / e 
undefined
> f
3
> var num = 8 
undefined
> num
8
> num += 2
10
> num
10
> num **=2
100
> 

