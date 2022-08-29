import styles from './Bibliotheque.module.css'
import { useContext, useEffect, useState } from 'react';
import Logo from '../logo.png';
import Compte from './Compte';
import Logout from './Logout';
import List from './List';
import Clip from './Clip';
import { globalContext } from './BibliUseContext';
import Titre from './Titre';
import '../style.css'

function Bibliotheque() {
    const [play, setPlay] = useState(false)
    const { token, uri, setUri } = useContext(globalContext)

    useEffect(() => {
        setPlay(true)
    }, [uri])
    return (
        <>
            <div className={styles.master}>
                <div className={styles.start}>
                    <div className={styles.block1}>
                        <div className={styles.logo1}>
                            <img className={styles.image1} src={Logo} alt="" srcset="" width={28} />
                            <h1 className={styles.textOne1}>ndulefy</h1>
                        </div>
                        <div className={styles.titre}>
                            <List />
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.pos}>
                            <Titre />
                            <Compte />
                            <Logout />
                        </div>
                    
                        <div className={styles.title}>
                            <h3 >Musiques récentes:</h3>
                        </div>
                        <div className={styles.affichage}>
                            <Clip />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bibliotheque;