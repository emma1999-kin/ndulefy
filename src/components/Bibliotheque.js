import styles from './Bibliotheque.module.css'
import {useEffect, useState} from 'react';
import Logo from '../logo.png';
// import Photo from '../emma.JPG';
import Search from "./Search"
import Compte from './Compte';
import Logout from './Logout';
import List from './List';
import Clip from './Clip';
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

    

    /*Creation boutton quitter*/
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }



    return (
        <>
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
                            <h3 >Recherches récentes:</h3>
                        </div>
                        <div className={styles.header}>
                            <Clip/>   <Clip/>   <Clip/>   <Clip/>    <Clip/>  <Clip/> 
                            <Clip/>    <Clip/>   <Clip/>   <Clip/>   <Clip/>  <Clip/> 
                            <Clip/>   <Clip/>   <Clip/>   <Clip/>   <Clip/>   <Clip/> 
                            <Clip/>   <Clip/>   <Clip/>   <Clip/>    <Clip/>  <Clip/> 
                            <Clip/>    <Clip/>   <Clip/>   <Clip/>   <Clip/>  <Clip/> 
                            <Clip/>   <Clip/>   <Clip/>   <Clip/>   <Clip/>   <Clip/> 
                        </div>
                    </div>
                    <div className={styles.block3}>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Bibliotheque;