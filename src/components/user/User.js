export default function User({item, infoUser}){

    return(<div>
            {item.id} {item.username}
            <button onClick={()=>{
             infoUser(item);
            }}>show All
            </button>
        </div>

    );

}