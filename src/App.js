import { useState } from "react";
import CharacterContainer from "./components/CharcterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";



function App() {

  const [characters, setCharacters ] = useState(null);

  const reqApi = async () => {
    try {
      const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");
      const frases = await api.json();
      setCharacters(frases);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    }
  };
  
  console.log(characters);

  return (
      <Container>
        <Header/>
        {!characters ? (<Welcome reqApi={reqApi} />) :
         <CharacterContainer characters={characters} reqApi={reqApi}  />}
      </Container>
  );
}



export default App;
