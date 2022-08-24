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
import '../style.css'

function Bibliotheque() {
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
                           <List/>
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.pos}>
                            <Titre/>
                            <Compte/>
                            <Logout/>
                        </div>
                        <div className={styles.title}>
                            <h3 >Musiques récentes:</h3>
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
  token="BQC6sua8ANzrqFprccrMalEwYDvWxoB-baBImSv0jCOZxnhPzAD_Zvw-KsZvdZnyClfsI9m3dqmC6iEjsw5C2dn-Y0evWTW4roi8KtgOfCCPRV_8HjJTq-ZG9H7In-u8CoDC2HV5c1GCFXNwbqj0lUVyHUXAO45WFbpc6NG4ULPAmPBU_kjx4XmwdNLJtp_Srfq6lRraCbqgSY4Ve3b8VWEonmY9ypUjFpU1zTRaWrjxZ_PyTmcEVOruO3ldalsMAmQ0S65DZsv_p1ubcRfUlzYUstU_pRKNvXv4im3hxzifXNTrvAoY_98sZTBt_2xJaP3hBjcoK0FIP5P2m-M"
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
  auplay={true}
  persistDeviceSelection={true}
  name="Ndulefy"
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
export default Bibliotheque;