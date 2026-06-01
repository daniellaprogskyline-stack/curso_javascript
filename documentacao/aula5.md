Nessa aula, ele ensina sobre variáveis e tipos primitivos utilizando o primeiro exercício como referência para pontuar observações, como deixar claro que mesmo com aqueles primeiros comandos feitos, os dados ainda não foram para lugar nenhum e que é importante sempre comentar os códigos para ficarem bem documentados. No javascript a forma de comentrar seria "//" única linha ou "/* */" mais de uma linha. Ele começa o exercício exemplificando como o fazer no código.
Logo em seguida, ele utiliza de exemplos reais do cotidiano para introduzir a explicação do que são variáveis. O primeiro exemplo é sobre vagas de um estacionamento e os carros que vão ocupar essa vaga.
Exemplos:
vaga a1 = carro1 (um unico = significa "recebe"). 
a1 = null (a vaga fica vazia, mesma coisa com a memória de um computador).

Ele explica qque percisamos delimitar os espaços dentro da memória do computador e no caso, isso são variáveis e elas podem salvar dados de diferentes tipos, inteiros, reais...
Para cada variável, eu preciso de um identificador:
var n1
var n2
var n3
E dentro disso, posso colocar valores:
var n1 = 5
var n2 = 8.5
var n3 = 15
Existem tamanhos diferentes para abrigar dados de tamanhos diferentes.
var n1 = "JavaScript"
var n2 = 8.5 'Curso em Vídeo'
var n3 = `Guanabara`
As três formas de delimitar uma string tem diferença dentro de Javascript.

Para identificadores, podemos começar com letras, $ ou _
Não podem começar com números
É possível usar letras ou números
é possivel utilizar acentos e símbolos
Não pode conter espaços e não podem ser palavras reservadas (palavras que o javascript usa como comandos: alert, var).

Agora, ele pede para abrir o node.js e fazer o seguinte:


> 'Oi'
'Oi'
> 3+2
5
> var nome = "Daniella"
undefined
> nome
'Daniella'
> nome = 'Paulo'
'Paulo'
> nome
'Paulo'
>.exit

Depois ele pede para abrir um terminal no vscode e fazer o mesmo. Ele pede para tomar cuidado para não abrir tantos terminais e se lembrar de dar exit em cada um deles.

Control + L limpa a tela do node.

Dicas de identificadores:
Maiusculas e minusculas fazem diferença.

se fizermos;

a = 10
A = 20 
São duas variáveis criadas.
Tente sempre criar nomes coerentes.
Valores numéricos: Number (infinity/NaN(not a number))
Cadeias de caracteres: strings (pode ser cadeia de números como cpf, número de telefone)
Object (array/vetor)
Undefined
Function
null
boolean

Depois disso, voltamos para o terminal e treinamos mais um pouco sobre as váriaveis e seus tipos com typeof:

> var n = 200
undefined
> typeof n
'number'
> n = 'Google'
'Google'
> typeof n
'string'
> typeof null
'object'
> typeof undefined
'undefined'
> typeof 6
'number'
> typeof 6.4
'number'
> typeof function (){}
'function'
>
>
