import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';
// Creating and instatance
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
 
  // Run only when the condition is satisfied
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();   
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      
      spotify.setAccessToken(_token);
      
      // the then method will take in a value, here value is user.
      spotify.getMe().then(user =>{

        dispatch({
          type:'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch ({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
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
