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