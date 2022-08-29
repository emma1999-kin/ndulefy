import './App.css'
import Bibliotheque from './components/Bibliotheque';
import Connexion from "./components/Connexion";
import { Routes, Route, Navigate } from 'react-router-dom';
import Recherche from "./components/Recherche";
import { useEffect, useState } from 'react';
import { globalContext } from './components/BibliUseContext';
import SpotifyWebApi from 'spotify-web-api-js';
import styles from './components/Bibliotheque.module.css'
import SpotifyPlayer from 'react-spotify-web-playback';

 function App() {
  const [uri, setUri] = useState("")
  const [token, setToken] = useState("")
  const [user, setUser] = useState({})
  const [play, setPlay] = useState(false)
  const Spotify = new SpotifyWebApi()
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    const hash = window.location.hash
    const token = window.localStorage.getItem("token")


    if (hash) {
      const token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]


      window.location.hash = ""
      window.localStorage.setItem("token", token)
      setToken(token)
    }
    Spotify.setAccessToken(token)
    Spotify.getMe()
      .then((data) => {
        window.localStorage.setItem("userData", JSON.stringify(data))
        setUser(data)
      })
      .catch((errors) => { console.error(errors) })
    setToken(token)
  }, [])
  // window.localStorage.setItem("userData", (user))
  return (

    <globalContext.Provider value={{ token, setToken, user, setUser, searchTerm, setSearchTerm, uri, setUri,play, setPlay,Spotify }}>
      <Routes>
        <Route path="/" element={!token ? <Connexion /> : <Navigate replace to="/accueil" />} />
        <Route path="accueil" element={token ? <Bibliotheque /> : <Navigate replace to="/" />} />
        <Route path="recherche" element={<Recherche />} />
        {/* <Route path="playlist" element={<Recherche />} />
        <Route path="prefere" element={<Recherche />} /> */}

      </Routes>
      {token && <div className={styles.block3}>
        <SpotifyPlayer
          styles={{
            height: '81px',
            activeColor: '#fff',
            bgColor: 'black',
            color: 'white',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '# ccc',
            trackNameColor: '#fff',
          }}
          token={token}
          uris={uri}
          auplay={true}
          persistDeviceSelection={true}
          name="Ndulefy"
          showSaveIcon={true}
          initialVolume={.5}
          callback={(pathy) => {
            !pathy.isPlaying ? setPlay(false) : setPlay(true)
          }

          }
          autoPlay={true}

        />
      </div>}
    </globalContext.Provider>)

        }

export default App;
