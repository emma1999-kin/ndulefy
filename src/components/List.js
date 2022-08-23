import styles from './List.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {IoMdAdd} from 'react-icons/io';
import {BsMusicNoteList} from 'react-icons/bs';
import {AiFillLike} from 'react-icons/ai'
function List(){

    return(<>
     <div className={styles.home}>
       <div className={styles.lign}><span ><AiOutlineHome size={30} color="white" /></span><a className={styles.em} href="">Accueil</a></div>
       <div className={styles.lign}><span ><BsMusicNoteList size={30} color="white"/></span><a className={styles.em} href="">Librairies</a></div>
       <div className={styles.lign}><span ><IoMdAdd size={30} color="white"/></span><a className={styles.em} href=""> PlayList</a></div>
       <div className={styles.lign}><span ><AiFillLike size={30} color="white"/></span><a className={styles.em} href="">Préferées</a></div>
    </div>
    
    </>)
}
export default List;