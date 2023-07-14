import { GameItem } from "components/GameItem/Game.Item"

export const GamesList = ({ data }) => {  
    return (
      <>
        <ul>
          {data.map(game => <GameItem key={game.id} game={game} />)}
        </ul>
      </>
    )
    
  }