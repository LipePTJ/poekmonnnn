# Pokédex React

Aplicação web desenvolvida em React para consumir dados da **PokéAPI** utilizando **Axios**. O projeto exibe os 151 primeiros Pokémon organizados em cards e permite pesquisar qualquer um deles pelo nome em tempo real.

Este projeto foi desenvolvido como atividade prática de consumo de APIs REST, componentização e gerenciamento de estado no React.

## Funcionalidades

- **Listagem de Pokémon:** Busca automática dos dados ao carregar a página utilizando `useEffect` e Axios.
- **Busca em tempo real:** Campo de pesquisa que filtra os Pokémon pelo nome conforme o usuário digita.
- **Feedback de carregamento:** Exibe um aviso na tela enquanto a requisição está em andamento.
- **Tratamento de erros:** Caso ocorra falha na conexão com a API, uma mensagem amigável é exibida sem quebrar a interface.
- **Componentização:** Cada card é renderizado por um componente próprio (`PokemonCard.jsx`) recebendo os dados via `props`.

## Tecnologias Utilizadas

- **React** (Hooks `useState` e `useEffect`)
- **Vite** (Ambiente de desenvolvimento)
- **JavaScript (ES6+)**
- **Axios** (Requisições HTTP com instância configurada em `baseURL`)
- **CSS3** (Estilização responsiva em grid)

## Estrutura de Pastas

```text
src/
├── components/
│   └── PokemonCard.jsx   # Componente visual de cada card
├── services/
│   └── api.js            # Configuração da instância do Axios
├── App.jsx               # Componente principal, estados e filtro
├── App.css               # Estilos da aplicação
├── index.css             # Reset global de estilos
└── main.jsx              # Ponto de entrada do React
