import styles from './Bibliotheque.module.css'
import {useEffect, useState} from 'react';
import Logo from '../logo.png';
import Search from "./Search";
import Compte from './Compte';
import Logout from './Logout';
import List from './List';
import Clip from './Clip';
import {Bibliocontext} from './BibliUseContext';
import SpotifyPlayer from 'react-spotify-web-playback';
import Titre from './Titre';

function Recherche() {
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])

    

    /*Creation boutton quitter*/

    return (
        <>
            <Bibliocontext.Provider value={{token,setToken}}>
            <div className={styles.master}>
                <div className={styles.start}>
                    <div className={styles.block1}>
                        <div className={styles.logo1}>
                            <img className={styles.image1} src={Logo}  alt="" srcset="" width={30}/>
                            <h1 className={styles.textOne1}>ndulefy</h1>
                        </div>
                        <div className={styles.titre}>
                           <div><List/></div> 
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.pos}>
                            <Search/>
                            <Compte/>
                            <Logout/>
                        </div>
                        <div className={styles.title}>
                            <h3 >Résultats :</h3>
                        </div>
                        <div>
                            <Clip/>  
                        </div>
                    </div>
                    <div className={styles.block3}>
                    <SpotifyPlayer
                    styles = {{ 
                        height:'81px' ,
                        activeColor : '#fff' , 
                        bgColor : 'red' , 
                        color : 'black' , 
                        loaderColor : '#fff' , 
                        sliderColor : '#1cb954' , 
                        trackArtistColor : '# ccc' , 
                        trackNameColor : '#fff' , 
                    }} 
  token="BQCEE_E2swSP8Bi0DRiwZmqexoU-MdaTZst7oqn3PXc7wCANNqzmPz_BRaBZK1M7PBi-JRCnkKwJPrJ74Y-Uf1taBfCAXcX-eWGMELbGbzpVv3R452D7G5aGE8W5IZVPjNCxNVqkPLy_rLT4UNUA9HQLk6KGx0dBnFd-97pRo1tT6SteZ2JUMtwqBmxyba1JsaxyDE3ml_BaoH-RQ0uwnV7_nV7NFAfJYefBv1oI1nLYCRWf9m5vy1SfiIBy4KB2V9DTrvxNjtIgh0ITh-1ilZd7XWLBKh1gJudSAQ0uAN4w6aRqfxb107IYPcGsRfe8F-3J0nadWVCS-recKpE"
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
  auplay={true}
  persistDeviceSelection={true}
  name="Spotify Web Player"
  showSaveIcon={true}
  initialVolume={.5}
/>
                    </div>
                </div>
            </div>

            </Bibliocontext.Provider>
        </>
    )
}
export default Recherche;