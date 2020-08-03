// Write your Character component here
import React from "react";
import styled from "styled-components"

const Button = styled.button`
  background: #000;
  color: #727bf7;
  border: none;
  border-top-right-radius: 3ch;
  border-bottom-left-radius:2ch;
  width:25ch;
  margin: 1ch 0;
`



const Character = ({names}) => {


  return(
  names.map((name, index)=>{
    return (
    <div key={index}>
      <Button>
        <h2>{name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
        alt={`such a cool pokemon`}/>
      </Button>
    </div>
    )
  })
  )

};

export default Character;

