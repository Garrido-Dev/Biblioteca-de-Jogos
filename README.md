# Biblioteca de Jogos 🎮

[![Deploy com GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge&logo=github)](https://garrido-dev.github.io/Biblioteca-de-Jogos/)

Projeto desenvolvido com React para praticar conceitos fundamentais da biblioteca criando uma pequena biblioteca de jogos.

🔗 **Acesse o projeto online:** [https://garrido-dev.github.io/Biblioteca-de-Jogos/](https://garrido-dev.github.io/Biblioteca-de-Jogos/)

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
