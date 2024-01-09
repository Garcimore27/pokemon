import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Pokemon() {
  const { pokemonId } = useParams()

  useEffect(() => {
    console.log(pokemonId)
  })

  return (
    <div className="App">

    </div>
  );
}

export default Pokemon;