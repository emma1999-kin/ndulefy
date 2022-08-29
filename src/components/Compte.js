import styles from './Compte.module.css';


function Compte() {
  const user = window.localStorage.getItem("userData")
  console.log(JSON.parse(user));
  return (<>
    <div className={styles.profil}>
      <img className={styles.ima} src={JSON.parse(user).images ? JSON.parse(user).images[0].url : ""} />
      <span className={styles.name}>{JSON.parse(user).display_name}</span>
    </div>

  </>)
}
export default Compte;