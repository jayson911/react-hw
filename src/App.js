import logo from './logo.svg';
import './App.css';
import Character from './Componets/Character'

function App() {
    return (
        <div>
        <Character
            id={'25'}
            name={'Armothy'}
            status={'Dead'}
            species={'unknown'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/25.jpeg'}
        />
            <Character
                id={'219'}
                name={'Mechanical Summer'}
                status={'unknown'}
                species={'Robot'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/219.jpeg'}
            />
            <Character
                id={'352'}
                name={'Tinkles'}
                status={'Dead'}
                species={'Alien'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/352.jpeg'}
            />
            <Character
                id={'566'}
                name={'Debrah’s Partner'}
                status={'Alive'}
                species={'Mythological Creature'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/566.jpeg'}
            />
            <Character
                id={'716'}
                name={'Too Cute to Murder Summer'}
                status={'Dead'}
                species={'Robot'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/716.jpeg'}
            />
            <Character
                id={'719'}
                name={'Diesel Weasel'}
                status={'Alive'}
                species={'Animal'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/719.jpeg'}
            />
        </div>
    );
}

export default App;
