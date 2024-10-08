# Sistema de Gestão de Participantes

Este projeto é um sistema simples de **gestão de participantes**, desenvolvido em **JavaScript**, que permite:
- Listar participantes já cadastrados.
- Adicionar novos participantes.
- Realizar o check-in de participantes previamente adicionados.

## Funcionalidades Principais

### 1. Listar Participantes
O sistema exibe uma tabela com todos os participantes que foram cadastrados, exibindo o nome, e-mail, data de inscrição (formato relativo usando a biblioteca **Day.js**) e a data de check-in, se realizada. Caso o check-in não tenha sido feito, um botão de confirmação aparece para permitir essa ação.

### 2. Adicionar Participantes
Através de um formulário, novos participantes podem ser adicionados à lista. Cada participante novo tem seus dados processados e inseridos no topo da lista exibida na página.

- **Regras de validação**: O sistema valida se já existe um participante com o e-mail informado antes de adicioná-lo. Caso o e-mail seja repetido, uma mensagem de alerta é exibida.

### 3. Realizar Check-In
Participantes que ainda não realizaram o check-in têm um botão associado ao seu nome. Ao clicar nesse botão, o sistema pede confirmação do usuário. Se confirmada, a data do check-in é registrada como o horário atual da máquina do usuário, e a tabela é atualizada automaticamente.

## Tecnologias Utilizadas

- **HTML**: Utilizado para a estrutura básica da página.
- **CSS**: Usado para o estilo básico (não incluído no código acima, mas aplicável).
- **JavaScript**: 
  - Linguagem principal usada para manipulação de dados e interação com a DOM.
  - Manipulação de eventos do formulário e do botão de check-in.
  - Validação e atualização da lista de participantes em tempo real.
- **Day.js**: Biblioteca JavaScript leve usada para manipulação e formatação de datas. No código, ela é utilizada para exibir a data de inscrição e check-in em formato relativo (por exemplo, "há 2 dias").

## Como o Código Funciona

### Estrutura de Dados
- O sistema utiliza um array de objetos chamado `participantes` para armazenar os dados dos participantes, como nome, e-mail, data de inscrição e data de check-in.

### Funções Principais
- **`criarNovoParticipane(participante)`**: Gera o HTML de cada linha da tabela para ser exibido no navegador, com informações do participante e o botão de check-in, caso aplicável.
  
- **`atualizarLista(participantes)`**: Atualiza a exibição da tabela ao iterar sobre o array de participantes e inserir a estrutura gerada por `criarNovoParticipane`.

- **`adicionarParticipante(event)`**: Adiciona um novo participante ao array, após a validação do e-mail, e atualiza a tabela de exibição.

- **`fazerCheckIn(event)`**: Permite o check-in de um participante e atualiza sua data de check-in, refletindo a mudança na interface.

## Como Usar

1. **Cadastrar Novos Participantes**: Preencha o formulário com nome e e-mail, e clique em "Adicionar Participante".
2. **Realizar Check-In**: Para participantes sem check-in, clique no botão "Confirmar check-in" ao lado do nome.

