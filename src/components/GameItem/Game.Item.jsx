export const GameItem = ({ game }) => {

   
    return (
      <li>
          <img width={200} loading="lazy" src={game.background_image} alt={game.name} />
          <h2>{game.name}</h2>
      </li>
    )
  }
  