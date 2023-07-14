import { GamesList } from "components/GamesList/GamesList";
import { STATUS } from "helpers/status";
import { useEffect, useState } from "react"
import { getTrendGames } from "server/gamesAPI"

export const Home = () => {

  const [status, setStatus] = useState(STATUS.IDLE);
  const [games, setGames] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    
    (async () => {
        try {
            setStatus(STATUS.PENDING)
            const data = await getTrendGames()
            setGames(data.results);
            // setTotalGames(data.count);
            setStatus(STATUS.RESOLVED);
        } catch {
          setStatus(STATUS.REJECTED)
        }
      })();
    }, [])

    return (
      <>
       {status === STATUS.RESOLVED && <GamesList data={games} />}
      </>
        
      
    )
  }