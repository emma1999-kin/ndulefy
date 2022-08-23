import styles from './Compte.module.css';
import Tof from '../emma.JPG'
function Compte(){

    return(<>
     <div className={styles.profil}>
        <img className={styles.ima} src={Tof} alt="" />
        <span className={styles.name}>Emmanuel</span>     
    </div>
    
    </>)
}
export default Compte;