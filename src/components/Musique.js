import {AiOutlinePlayCircle} from 'react-icons/ai'
import styles from './Clip.module.css';
function Musique(props) {
   
    return (<>

        <div className={styles.artist}  onClick={props.playMusic}>
            <div className={styles.star} style={{ background: `url(${props.image})` }}></div>
            <div className={styles.raw}>
                <div className={styles.name}>{props.artist}</div>
                <div className={styles.titre}>{props.title}</div>
            </div>
            <div className={styles.button}>
                <AiOutlinePlayCircle size={40} color='green' />
            </div>
        </div>
    </>)
}
export default Musique;