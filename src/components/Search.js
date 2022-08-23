import {BsSearch} from 'react-icons/bs';
import styles from './Search.module.css'
function Search(){

    return(<>
     <div className={styles.input}>
                <span><BsSearch/></span>
                <input type="text" placeholder="Artiste, album..." />
    </div>
    
    </>)
}
export default Search;