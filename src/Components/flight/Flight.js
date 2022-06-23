export default function Flight({item}) {

    return(
        <div>
            {item.flight_number}{' '}
            {item.mission_name}{' '}
            {item.launch_year}{' '}
            <img src={item.links.mission_patch_small} alt="link"/>
        </div>
    );
}