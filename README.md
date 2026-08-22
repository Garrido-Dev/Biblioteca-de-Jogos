# Biblioteca de Jogos 🎮

Projeto desenvolvido com React para praticar conceitos fundamentais da biblioteca criando uma pequena biblioteca de jogos.

A ideia é simples: adicionar jogos informando título e capa, visualizar os jogos cadastrados e removê-los. Os dados continuam salvos mesmo depois de fechar ou atualizar a página usando `localStorage`.

> Projeto desenvolvido durante meus estudos de React, acompanhando uma aula e colocando os conceitos em prática. A implementação foi feita por mim a partir do que fui aprendendo durante o projeto.

## O que o projeto faz

- Adiciona jogos com título e URL da capa
- Lista os jogos cadastrados
- Remove jogos individualmente
- Mantém os jogos salvos no `localStorage`
- Recupera os jogos salvos ao abrir a aplicação novamente
- Exibe uma mensagem quando a biblioteca está vazia
- Utiliza componentes separados para organizar a interface

## Tecnologias

- React
- JavaScript
- Vite
- CSS
- LocalStorage

## Conceitos de React praticados

### `useState`

Utilizei estado para controlar a coleção de jogos e os valores dos campos do formulário.

```js
const [games, setGames] = useState([])
const [title, setTitle] = useState("")
const [cover, setCover] = useState("")
```

### Componentização

Separei a aplicação em componentes menores:

```text
src/
├── components/
│   ├── Game.jsx
│   ├── NewGameForm.jsx
│   └── TextInput.jsx
├── hooks/
│   └── useGameCollection.js
└── App.jsx
```

Isso deixou o `App` mais simples e cada componente ficou responsável por uma parte da interface.

### Props

Os componentes recebem dados e funções através de props.

Por exemplo, o formulário recebe a função responsável por adicionar um jogo:

```jsx
<NewGameForm addGame={addGame} />
```

E cada jogo recebe os dados necessários para ser exibido, além da função de remoção:

```jsx
<Game
  key={game.id}
  title={game.title}
  cover={game.cover}
  onRemove={() => removeGame(game.id)}
/>
```

### Formulário controlado

Os inputs são controlados pelo estado do React:

```jsx
<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

Dessa forma, o valor digitado fica sincronizado com o estado da aplicação.

### `map` e `filter`

Usei `map` para transformar a coleção de jogos em componentes React:

```js
games.map((game) => ...)
```

E `filter` para remover um jogo específico sem alterar diretamente o array original:

```js
state.filter(game => game.id !== id)
```

### Atualização baseada no estado anterior

Para adicionar e remover jogos, utilizei a função de atualização do estado:

```js
setGames(state => [...state, game])
```

Isso permite trabalhar com o estado mais atual da coleção.

### Custom Hook

A lógica relacionada à coleção de jogos foi retirada do `App` e colocada em um hook próprio:

```js
useGameCollection()
```

Ele concentra:

- estado dos jogos
- adição
- remoção
- leitura do `localStorage`
- atualização do `localStorage`

Assim, o `App` fica responsável principalmente pela composição da interface.

## Persistência com LocalStorage

Os jogos são convertidos para JSON antes de serem armazenados:

```js
localStorage.setItem(
  "obc-game-lib",
  JSON.stringify(newState)
)
```

Quando a aplicação inicia, os dados são recuperados e convertidos novamente para JavaScript:

```js
const storageGames = localStorage.getItem("obc-game-lib")

if (!storageGames) return []

return JSON.parse(storageGames)
```

Isso foi uma parte importante do projeto porque me ajudou a entender na prática a diferença entre o estado da aplicação e os dados persistidos no navegador.

## Organização

A principal preocupação na organização foi evitar colocar toda a lógica e o JSX em um único arquivo.

O `App` faz a composição geral:

```text
App
├── NewGameForm
│   └── TextInput
└── Game
```

Enquanto `useGameCollection` concentra a lógica da coleção.

## Próximos passos

Algumas melhorias que pretendo implementar conforme avanço nos estudos:

- Validação dos campos do formulário
- Melhor tratamento de URLs de imagens
- Mensagens de feedback para o usuário
- Edição de jogos
- Busca e filtros
- Melhorias de responsividade
- Testes
- Evolução da interface

## Objetivo do projeto

Mais do que ser uma aplicação grande, este projeto serviu para consolidar conceitos que estou estudando em React e entender como organizar uma aplicação pequena de forma mais próxima de um projeto real.

O foco principal foi aprender a trabalhar com **estado, componentes, props, formulários, hooks, manipulação de arrays e persistência de dados no navegador**.
