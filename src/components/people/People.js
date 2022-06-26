export default  function People({item}){

    return(
        <div className={'peoplesInfo'}>
            Имя:{item.name} <br/>
            Рост: {item.height}<br/><br/><br/>


        </div>
    )
}