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
    <Character
        name={'Bart Simpson'}
        link = {'https://simpsons.fandom.com/wiki/Bart_Simpson'}
        desc={'Bartholomew JoJo "Bart" Simpson (born April 1[7] or February 23[8]) is the Deuteragonist of The Simpsons.\n' +
            '\n' +
            '    Bart is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'}
        picture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
    />
    <Character
      name={'Lisa Simpson'}
      link={'https://simpsons.fandom.com/wiki/Lisa_Simpson'}
      desc={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}
      picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
    />
    <Character
      name={'Marge Simpson'}
      link={'https://simpsons.fandom.com/wiki/Marge_Simpson'}
      desc={'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge is 37 years of age. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}
      picture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
    />
    <Character
        name={'Charles Montgomery Burns'}
        link={'https://simpsons.fandom.com/wiki/Charles_Montgomery_Burns'}
        desc={'Charles Montgomery Plantagenet Schicklgruber Burns[12], also known as Monty Burns, Montgomery Burns, C.M. Burns, and Mr. Burns, is the owner of the Springfield Nuclear Power Plant and the main antagonist of The Simpsons franchise. He is Springfield\'s richest, oldest, and most powerful citizen. His net worth has been stated to be in the billions and in one instance was pegged at exactly $1,800,037,022.[13]'}
        picture={'https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png'}
    />

  </div>);
}

export default App;
