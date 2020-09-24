import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player"
// Creating and instatance
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
 
  // Run only when the condition is satisfied
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();   
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      
      // the then method will take in a value, here value is user.
      spotify.getMe().then(user =>{
        console.log('👨',user);
      })
    }

    console.log ("Token:", token);
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>  
        )
      }
    </div>
  );
}

export default App;
