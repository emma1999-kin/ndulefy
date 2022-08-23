import styles from './Connexion.module.css'
import Logo from '../logo.png'
function Connexion() {

    const CLIENT_ID = "fbb5509b0ab341e9a844f065e6e7129b"
    const REDIRECT_URI = "http://localhost:3000/bibliotheque"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = ["user-read-email","user-read-private",
                   "user-modify-playback-state","user-read-playback-state",
                   "user-read-currently-playing","user-read-recently-played",
                   "user-read-playback-position",
                   " user-top-read"]
    
      return (
      <div className={styles.containerMain}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img className={styles.image} src={Logo}  alt="" srcset="" />
            <h1 className={styles.textOne}>ndulefy</h1>
          </div>
           <h2 className={styles.textTwo}>
           L'écoute est tout.
          </h2>
          <p className={styles.para}>
          Besoin de musique en ce moment ?<br />Commencez à écouter votre bibliothèque maintenant
          </p>
          <div className={styles.button}>
          <button className={styles.lien}>
            <a  className={styles.root} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Connectez-vous</a> 
          </button> 
          </div>
        </div>
      
      </div>)
    } 
    export default Connexion;