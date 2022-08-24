import styles from './List.module.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BsMusicNoteList} from 'react-icons/bs';
import {BsSearch} from 'react-icons/bs';
import {AiFillLike} from 'react-icons/ai'
import { Link } from 'react-router-dom';
function List(){

    return(<>
     <div className={styles.home}>
      <Link to='/bibliotheque' style={{textDecoration:'none'}}> <div className={styles.lign}><span ><AiOutlineHome size={30} color="white" /></span><a className={styles.em} href="">Accueil</a></div></Link> 
      <Link to='/recherche' style={{textDecoration:'none'}}><div className={styles.lign}><span ><BsSearch size={30} color="white"/></span><a className={styles.em} href="">Recherche</a></div></Link> 
      <Link to='/playlist' style={{textDecoration:'none'}}><div className={styles.lign}><span ><BsMusicNoteList size={30} color="white"/></span><a className={styles.em} href=""> PlayList</a></div></Link>
    </div>
    
    </>)
}
export default List;