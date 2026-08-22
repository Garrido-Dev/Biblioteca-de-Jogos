import {useState} from 'react'

export default function useGameCollection(){
      const [games, setGames ] = useState(()=>{
        const storageGames = localStorage.getItem("obc-game-lib")
        if (!storageGames) return [] // Se nao existe nada no localStorage ele retorna array vazio
        const gameArray = JSON.parse(storageGames)
        return gameArray
      })
    
    
    const addGame = ({title, cover})=>{
      const id = Math.floor(Math.random()*100000)
      const game = {id, title, cover} //Cria um jogo
      setGames(state=>{
        const newState = [...state, game]
        localStorage.setItem("obc-game-lib", JSON.stringify(newState))
        return newState
      }) // Adiciona o novo jogo ao estado atual
    }
    
    const removeGame = (id)=>{
      
      setGames(state => { 
        const newState = state.filter(game => game.id !== id)
        localStorage.setItem("obc-game-lib", JSON.stringify(newState))
        return newState
      }) 
    }

    return {games, addGame, removeGame}
}