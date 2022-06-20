import './character.css';

function Character(props) {
    let {name, link, desc, picture} = props;

    return (<div>
        <h2 className={'target asd'}><a href={link}> {name}</a></h2>
        <p>{desc}</p>
        <img src={picture} alt=""/>
    </div>)

}

export default Character;