import React ,{ useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const Wrap = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    font-family: 'Press Start 2P';
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    background-color: blue;
`

const App = () => {
    const [ pokeList, setPokeList ] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(urlReply => {
                console.log(urlReply)
                setPokeList(urlReply.data.results.map(pokemon => pokemon.name))
            })
            .catch(errorMessage => console.warn(errorMessage))
    },[])




  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (

    <Wrap>
      <h1>Characters</h1>
       <Character names={pokeList} />
    </Wrap>
  );
}

export default App;
