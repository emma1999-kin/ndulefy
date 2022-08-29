import styles from './Clip.module.css';
import SpotifyWebApi from 'spotify-web-api-js';
import { globalContext } from './BibliUseContext'
import { useContext, useEffect, useState } from 'react';
import Musique from './Musique';

function Clip() {

  const { token,uri, setUri} = useContext(globalContext)
  const spotify = new SpotifyWebApi();
  const [recents, setRecents] = useState([])
 
  spotify.setAccessToken(token)

  useEffect(() => {

    setTimeout(() => {

      spotify
        .getMyRecentlyPlayedTracks()
        .then((data) => {
          console.log("my uri",data.items[0].track.uri);
          setRecents(data.items)
        })
        
        .catch((error) => {
          console.log(error);
        });

    }, 2000)
  }, [])
 console.log(uri)
  return (<>
    <div className={styles.header}>
      {
        recents.map((item) => {
          return (
            <Musique playMusic={()=>setUri(item.track.uri)} image={item.track.album.images[0].url} artist={item.track.artists[0].name} title={item.track.name} />
          )
        })
      }
    </div>
  </>)
}
export default Clip;