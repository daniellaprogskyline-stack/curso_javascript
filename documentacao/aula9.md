## Introdução ao DOM - Curso JavaScript #09


Essa aula foi focada em criar uma página HTML simples para manipular usando JavaScript através do DOM (Document Object Model) é uma representação da página HTML em forma de árvore de objetos, que permite ao JavaScript acessar, ler e modificar os elementos da página.

Quando um navegador abre um arquivo HTML, ele transforma todas as tags em objetos organizados hierarquicamente. Essa estrutura é o DOM.
Com ele, o JavaScript consegue:
Alterar textos
Alterar cores e estilos
Esconder ou mostrar elementos
Criar novos elementos
Remover elementos
Responder a cliques e outras ações do usuário.

A estrutura básica mostrada pelo Guanabara foi:

Window
│
├── Location
├── History
└── Document
     │
     └── HTML
          │
          ├── Head
          └── Body
window - janela do navegador.
document  - documento HTML atual.
body - corpo da página.
head - cabeçalho da página.
location - URL atual.
history - histórico de navegação.

Podemos selecionar:

por marca: getElementsByTagName()
por ID: getElementByID()
por nome: getElementByName()
por classe:getElementByClassName()
por seletor: queySelector()/ querySelectorAll()

obs: toda div é representada por um (#) e toda classe por um (.)

