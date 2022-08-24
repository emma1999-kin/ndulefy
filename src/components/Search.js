import {BsSearch} from 'react-icons/bs';
import styles from './Search.module.css'
import SpotifyWebApi from 'spotify-web-api-js';
import {Bibliocontext} from './BibliUseContext'
import {useContext, useEffect, useState} from 'react'
import Clip from './Clip';
function Search(){
    const [search, setSearch] = useState('');
    const [name, setName] = useState();
    const {token} = useContext(Bibliocontext);
    useEffect(()=>{
        const spotify = new SpotifyWebApi();
        spotify.setAccessToken(token)
        const req = spotify.searchAlbums(name)
            .then((data)=> setSearch(data))
    }, [])
 function Requete(e)
 {
     setName(e.target.value);
     console.log(search);
 }
    return(<>
     <div className={styles.input}>
                <span><BsSearch/></span>
                <input type="text" placeholder="Artiste, album..." onChange={ Requete }/>
    </div>
    <div></div>
    </>)
}
export default Search;