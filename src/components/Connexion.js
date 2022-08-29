import styles from './Connexion.module.css'
import Logo from '../logo.png'
function Connexion() {

  const CLIENT_ID = "fbb5509b0ab341e9a844f065e6e7129b"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE =
    [
      "user-read-email",
      "user-read-private",
      "user-library-modify",
      "user-library-read",
      "app-remote-control",
      "streaming",
      "playlist-read-collaborative",
      "playlist-modify-public",
      "playlist-read-private",
      "playlist-modify-private",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "user-follow-modify",
      "user-follow-read",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing"
    ]

  return (
    <div className={styles.containerMain}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img className={styles.image} src={Logo} alt="" srcset="" />
          <h1 className={styles.textOne}>ndulefy</h1>
        </div>
        <div className={styles.aligne}>

          <div >
            <h1 className={styles.textTwo}>
              L'écoute est tout.
            </h1>
          </div>
          <div><p className={styles.para}>
            Besoin de musique en ce moment ?<br />Commencez à écouter votre bibliothèque maintenant
          </p></div>
          <div className={styles.button}>
            <button className={styles.lien}>
              <a className={styles.root} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}>Connectez-vous</a>
            </button>
          </div>
        </div>
      </div>
    </div>)
}
export default Connexion;

