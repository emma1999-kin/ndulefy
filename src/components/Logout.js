import styles from './Compte.module.css';
import {HiOutlineLogout} from 'react-icons/hi';
import {Bibliocontext} from './BibliUseContext';
import { Link, useNavigate } from 'react-router-dom';

import { useContext } from 'react';

function Logout(){

  const navigate = useNavigate();

  const {token,setToken} = useContext(Bibliocontext)
    
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
    navigate("/", { replace: true })
}


    return(<>
     <div className={styles.logout}>
          <button type="submit" className={styles.col} onClick={logout}>
          
            <span className={styles.quit}><HiOutlineLogout size={30}/>Se Déconnecter</span> 
          </button>
    </div>
    
    </>)
}
export default Logout;