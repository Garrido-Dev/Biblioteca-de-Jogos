# 🎮 Biblioteca de Jogos

[![Deploy com GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge&logo=github)](https://garrido-dev.github.io/Biblioteca-de-Jogos/)

Projeto desenvolvido com React para praticar conceitos fundamentais da biblioteca criando uma pequena biblioteca de jogos.

🔗 **Acesse o projeto online:** [https://garrido-dev.github.io/Biblioteca-de-Jogos/](https://garrido-dev.github.io/Biblioteca-de-Jogos/)

A ideia é simples: adicionar jogos informando título e capa, visualizar os jogos cadastrados e removê-los. Os dados continuam salvos mesmo depois de fechar ou atualizar a página usando `localStorage`.

> Projeto desenvolvido durante meus estudos de React, acompanhando uma aula e colocando os conceitos em prática. A implementação foi feita por mim a partir do que fui aprendendo durante o projeto.

---

## ✨ O que ele faz

- Adiciona jogos com título e URL da capa  
- Lista os jogos cadastrados  
- Remove jogos individualmente  
- Mantém os jogos salvos no `localStorage`  
- Recupera os jogos salvos ao abrir a aplicação novamente  
- Exibe uma mensagem quando a biblioteca está vazia  
- Utiliza componentes separados para organizar a interface  
- Tema claro/escuro que acompanha o sistema

---

## 🛠️ Tecnologias

- React  
- JavaScript (ES6+)  
- Vite  
- CSS com variáveis (light/dark)  
- `localStorage`

---

### Componentização

Separei a aplicação em componentes menores. Cada componente ficou responsável por uma parte da interface, deixando o `App` mais limpo e organizado.

### Props

Os componentes recebem dados e funções através de `props`.

Exemplo: o formulário recebe a função para adicionar um jogo:

```jsx
<NewGameForm addGame={addGame} />

<Game
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

`map` e `filter`

Usei ´map´ para transformar a coleção de jogos em componentes React:

```
games.map((game) => <Game key={game.id} ... />)

```

E ``filter`` para remover um jogo específico sem alterar diretamente o array original:

```
state.filter(game => game.id !== id)

```
### Atualização baseada no estado anterior

Para adicionar e remover jogos, utilizei a função de atualização do estado:

```
setGames(state => [...state, game])

```

Isso permite trabalhar com o estado mais atual da coleção.

### Custom Hook

A lógica relacionada à coleção de jogos foi retirada do ``App`` e colocada em um hook próprio:

```
js

useGameCollection()

```

Ele concentra:
- O **estado dos jogos**
- A **adição** de novos itens
- A **remoção** de itens
- A **leitura** do `localStorage`
- A **atualização** do `localStorage`

Assim, o `App` fica responsável principalmente pela composição da interface.

### Persistência com localStorage

Os jogos são convertidos para JSON antes de serem armazenados:

```javascript
localStorage.setItem("obc-game-lib", JSON.stringify(newState))
```

Quando a aplicação inicia, os dados são recuperados e convertidos novamente para JavaScript:

```javascript
const storageGames = localStorage.getItem("obc-game-lib")
if (!storageGames) return []
return JSON.parse(storageGames)
```

Isso me ajudou a entender na prática a diferença entre o estado da aplicação e os dados persistidos no navegador.

### 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com

# Entre na pasta
cd Biblioteca-de-Jogos

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Depois é só abrir `http://localhost:5173` no navegador.

### 📦 Deploy

O projeto está publicado no GitHub Pages usando Vite. O deploy pode ser feito com:

```bash
npm run build
```

E enviando a pasta `dist` para o branch `gh-pages`.

### 🔮 Próximos passos

Algumas melhorias que pretendo implementar conforme avanço nos estudos:
- [ ] Validação dos campos do formulário
- [ ] Melhor tratamento de URLs de imagens
- [ ] Mensagens de feedback para o usuário (*toasts*)
- [ ] Edição de jogos
- [ ] Busca e filtros
- [ ] Melhorias de responsividade
- [ ] Testes unitários
- [ ] Evolução da interface com mais recursos

### 💡 Objetivo do projeto

Mais do que ser uma aplicação grande, este projeto serviu para consolidar conceitos que estou estudando em React e entender como organizar uma aplicação pequena de forma mais próxima de um projeto real.

O foco principal foi aprender a trabalhar com:
- Estado e imutabilidade
- Componentes e *props*
- Formulários controlados
- Manipulação de arrays (`map`, `filter`)
- *Custom hooks*
- Persistência com `localStorage`

---

Feito com ☕ e React. Se quiser contribuir ou tiver sugestões, fique à vontade para abrir uma *issue* ou um *pull request*.
