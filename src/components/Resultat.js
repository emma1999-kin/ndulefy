import styles from './Clip.module.css';

import SpotifyWebApi from 'spotify-web-api-js';
import { globalContext } from './BibliUseContext'
import { useContext, useEffect, useState } from 'react';
import Musique from './Musique';
 function Resultat(){

    const { token } = useContext(globalContext)
    const spotify = new SpotifyWebApi();
    const [resultat, setResultat] = useState([])
  
    spotify.setAccessToken(token)
  
    useEffect(() => {
  
       setTimeout(() => {
  
              spotify
            .getTracks()
            .then((data) => {
            console.log(data);
            setResultat(data.items)
           })
           .catch((error) => {
            console.log(error);
           });
    
        }, 2000)
       }, [])
  


    
 return(<>
    <div className={styles.header}>
      {
         resultat.map((item) => {
         return (
           <Musique image={item.track.album.images[0].url} artist={item.track.artists[0].name} title={item.track.name} />
          )
          })
      }
    </div>
  </>)
 }
 export default Resultat;