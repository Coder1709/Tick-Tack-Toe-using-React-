import './App.css'
import { useState } from 'react'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {

  const [cards, setCards] = useState([])

  const [turns, setTurns] = useState(0)



  //shuffle card 
  const shuffleCard = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(turns + 1)
  }
  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => {
          return (
            <div className="card" key={card.id}>
              <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover.png" alt="card back" />

              </div>

            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App