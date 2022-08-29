import styles from './Bibliotheque.module.css'
import { useContext, useEffect, useState } from 'react';
import Logo from '../logo.png';
import Search from "./Search";
import Compte from './Compte';
import Logout from './Logout';
import List from './List';
import Clip from './Clip';
import Titre from './Titre';
import Menuplay from './Menuplay';
import Resultat from './Resultat';
import { globalContext } from './BibliUseContext';
import SpotifyWebApi from 'spotify-web-api-js';
import Musique from './Musique';


function Recherche() {
   
    const { searchTerm,token, setToken,play, setPlay,uri, setUri } = useContext(globalContext)
    const [search, setSearch] = useState([]);
    
    useEffect(() => {
        const spotify = new SpotifyWebApi();
        spotify.setAccessToken(token)
        const req = spotify.searchTracks(searchTerm)
            .then((data) => setSearch(data.tracks.items))
        console.log(search)
    }, [searchTerm])
    console.log('emma',uri);

    console.log(search)

    return (
        <>
            <div className={styles.master}>
                <div className={styles.start}>
                    <div className={styles.block1}>
                        <div className={styles.logo1}>
                            <img className={styles.image1} src={Logo} alt="" srcset="" width={30} />
                            <h1 className={styles.textOne1}>ndulefy</h1>
                        </div>
                        <div className={styles.titre}>
                            <div><List /></div>
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.pos}>
                            <Search />
                            <Compte />
                            <Logout />
                        </div>
                        <div className={styles.title}>
                            <h3 >Résultats :</h3>
                        </div>
                        <div className={styles.header}>
                            {
                                search.map((musique) => {
                                    return (
                                        <Musique playMusic={()=>setUri(musique.uri)} image={musique.album.images[0].url} artist={musique.artists[0].name} title={musique.name} />)
                                })
                            }

                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    )
}
export default Recherche;