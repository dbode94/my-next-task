import { ReactComponent as MagSvg } from '../../assets/magnifier-svgrepo-com.svg';

import './searchConnection.style.scss'

const SearchConnection = () => {
    return(
        <div className='search_container'>
            <MagSvg className='mag_svg'/>
            <hr />
            <input className='search_input' type="search" placeholder='Search for a new connection...' />
        </div>
    )
}

export default SearchConnection;