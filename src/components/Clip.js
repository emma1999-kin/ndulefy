import styles from './Clip.module.css';
import Tof from '../';
import {AiOutlinePlayCircle} from 'react-icons/ai'
function Clip(){

    return(<>
            <div>
                <div className={styles.artist}>
                    <div className={styles.star}></div>
                    <div className={styles.titre}>YATAL</div>
                    <div className={styles.name}>Mister à la croix</div>
                    <span className={styles.button} ><AiOutlinePlayCircle size={35} color='green'/></span>
                </div>
            </div>
    </>)
}
export default Clip;