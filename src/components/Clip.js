import styles from './Clip.module.css';
import {AiOutlinePlayCircle} from 'react-icons/ai'
import SpotifyWebApi from 'spotify-web-api-js';
import {Bibliocontext} from './BibliUseContext'
import { useContext, useEffect, useState } from 'react';

function Clip(){

    const {token} = useContext(Bibliocontext)
    const spotify = new SpotifyWebApi();
    const [recents, setRecents] = useState([])

    spotify.setAccessToken(token)

    useEffect(()=>{

        setTimeout(()=>{

                spotify
                .getMyRecentlyPlayedTracks()
                .then((data) => {
                  console.log(data);
                  setRecents(data.items)
                })
                .catch((error) => {
                  console.log(error);
                });

        },2000)
    },[])

    return(<>
            <div className={styles.header}>
               {
                   recents.map((item)=>{
                       return (
                        <div className={styles.artist}>
                          <div className={styles.star} style={{background:`url(${item.track.album.images[0].url})`}}></div>
                          <div className={styles.raw}>
                            <div className={styles.name}>{item.track.artists[0].name}</div>
                            <div className={styles.titre}>{item.track.name}</div>
                          </div>
                          <div className={styles.button}>
                            <AiOutlinePlayCircle size={40} color='green'/>
                          </div> 
                          
                        </div>
                       )
                   })
               }
            </div>
    </>)
}
export default Clip;