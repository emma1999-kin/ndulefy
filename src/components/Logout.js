import styles from './Compte.module.css';
import {HiOutlineLogout} from 'react-icons/hi';
function Logout(){

    return(<>
     <div className={styles.logout}>
          <button type="submit" className={styles.col}>
            <span className={styles.quit}><HiOutlineLogout size={30}/>Se Déconnecter</span> 
          </button>
    </div>
    
    </>)
}
export default Logout;