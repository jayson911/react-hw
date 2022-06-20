import './character.css';

function Character(props) {
    let {name, link, desc, phrases, picture} = props;

    return (<div>
        <h2 className={'target asd'}><a href={link}> {name}</a></h2>
        <p>{desc}</p>
        <ul>favorite phrase</ul>
        <li>{phrases}</li>
        <img src={picture} alt=""/>
    </div>)

}

export default Character;