import styles from './List.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsMusicNoteList } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function List() {

  return (<>
    <div className={styles.home}>
      <Link className={styles.link} to='/accueil' style={{ textDecoration: 'none' }} title={"Accueil"}><AiOutlineHome size={30} color="white" /> <span className={styles.em} >Accueil</span> </Link>
      <Link className={styles.link} to='/recherche' style={{ textDecoration: 'none' }} title={"Recherche"}><BsSearch size={30} color="white" /><span className={styles.em} >Recherche</span></Link>
      {/* <Link className={styles.link} to='/playlist' style={{ textDecoration: 'none' }} title={"Playlist"}><BsMusicNoteList size={30} color="white" /><span className={styles.em} >Playlist</span></Link> */}
    </div>

  </>)
}
export default List;