import logo from './logo.svg';
import './App.css';
import Character from "./components/character";

function App() {
  return (<div>
    <Character
        name={'Homer Simpson'}
        link = {'https://simpsons.fandom.com/wiki/Homer_Simpson'}
        desc={'Homer Jay Simpson (born May 12, 1951)[36] is the main protagonist of  The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t. He also serves as the main protagonist of the The Simpsons Movie. He is 40 years old and was born in 1951.'}
        picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
    />

  </div>);
}

export default App;
