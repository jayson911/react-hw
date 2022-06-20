import './Character.css';

        function Character(props) {
            let {id,name,status,species,gender,image} = props;

            return (<div>
                <h1>id: {id}, name: {name}</h1>
                <h2>status: {status}</h2>
                <p>species: {species}</p>
                <p>gender: {gender}</p>
                <img src={image} alt=""/>
            </div>)

        }
        export default Character;

