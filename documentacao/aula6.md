## Tratamento de dados - Curso JavaScript #06
Aula 6
Nessa aula foi explicado que os principais tipos primitivos do JavaScript são number, string e boolean, mas o foco ficou em number e string. O professor relembrou o uso do prompt, que serve para receber dados digitados pelo usuário. Esses dados podem ser armazenados em variáveis usando var, como por exemplo var nome = window.prompt("Qual é seu nome?"). Depois disso, é possível usar o valor armazenado na variável em mensagens com alert.

Também foi mostrado como juntar textos e variáveis usando a concatenação, que é feita com o sinal de + (ao escrever uma mensagem de boas-vindas para o usuário) Foi explicado que o + pode servir tanto para juntar textos quanto para somar números, dependendo do tipo de dado utilizado.

Um problema apresentado foi que o prompt sempre retorna uma string, mesmo quando o usuário digita números. Por isso, ao tentar somar dois números digitados, o JavaScript acaba juntando os valores ao invés de somar. Para resolver isso, é necessário converter os dados para número usando Number(), Number.parseInt() ou Number.parseFloat(). O parseInt converte para inteiro e o parseFloat converte para número decimal.

Ele também mostrou como transformar números em strings usando String() ou .toString() e foi apresentada uma forma mais moderna de criar frases usando template strings, que utilizam crases (`` ` ``) e placeholders ${}. Esse método deixa o código mais organizado e fácil de ler do que várias concatenações.

Também foram mostrados alguns recursos básicos para trabalhar com strings, como length, que informa a quantidade de caracteres de uma palavra, toUpperCase(), que transforma tudo em maiúsculo, e toLowerCase(), que transforma tudo em minúsculo. O professor reforçou a importância de praticar os exemplos e fazer anotações para facilitar os estudos futuramente.


> var s =' javascript'
undefined
> s
' javascript'
> 'eu estou estudando s'
'eu estou estudando s'
> 'Eu estou estudando' + s
'Eu estou estudando javascript'
> 
> nome = 'Daniella'
'Daniella'
> idade = 41
41
> nota = 5.5
5.5
> nota
5.5
> `O aluno ${nome} com ${idade} anos tirou a nota ${nota}`
'O aluno Daniella com 41 anos tirou a nota 5.5'
> var n1 = 1545.6
undefined
> n1
1545.6
> n1.toFixed(2)
'1545.60'
> n1.toFixed(2).replace('.', ',')
'1545,60'

> n1.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
'R$ 1.545,60'
> 