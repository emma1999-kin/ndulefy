import styles from './Compte.module.css';
import {Bibliocontext} from './BibliUseContext'
import { useContext, useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';




function Compte(){
    
    const spotify = new SpotifyWebApi();
    const {token} = useContext(Bibliocontext)
    const [user,setuser] = useState({})
   
    spotify.setAccessToken(token)
    console.log("TOKEN",token)
    

    useEffect(()=>{
        
       setTimeout(()=>{
        spotify
        .getMe()
        .then((data) => {
          console.log(data);
          setuser(data)
        })
        .catch((error) => {
          console.log(error);
        });
       },2000)

        console.log("DONE")
    },[])
    return(<>
     <div className={styles.profil}>
        <img className={styles.ima} src={user.images ?user.images[0].url:""} />
        <span className={styles.name}>{user.display_name}</span>     
    </div>
    
    </>)
}
export default Compte;