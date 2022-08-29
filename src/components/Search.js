import { BsSearch } from 'react-icons/bs';
import styles from './Search.module.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { globalContext } from './BibliUseContext'
import { useContext, useEffect, useState,useRef } from 'react'
function Search() {

    const {searchTerm,setSearchTerm} = useContext(globalContext)

    const [resultat, setResultat] = useState();
    const { token } = useContext(globalContext);

    const input = useRef()
    


    function Requete(e) {
        setResultat(e.target.value);
        setSearchTerm(input.current.value)
     
    }
    return (<>
        <div className={styles.input}>
            <span><BsSearch /></span>
            <input ref={input} type="text" placeholder="rechercher une chanson..." onChange={Requete} />
        </div>
        <div></div>
    </>)
}
export default Search;