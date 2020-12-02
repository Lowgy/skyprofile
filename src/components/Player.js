import React, {useState, useEffect} from "react";
import Results from "./Results";

const Player = () => {
  const [username, setUsername] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [uuid, updateUuid] = useState("");

  const apiKey = "1a200d01-7ee6-4486-b08b-b2fa6e33020e";
  var fullUUID;

  function requestProfile() {
    fetch(`https://api.minetools.eu/uuid/${username}`)
    .then(result => result.json())
    .then(data => {
      try{
        fullUUID = data.id;
        updateUuid(fullUUID);
      } catch (err) {
        return Promise.reject('Username not found!')
      }
    })
    .then(function() {
      return fetch(`https://api.hypixel.net/player?uuid=${fullUUID}&key=${apiKey}`)
    })
    .then(response => response.json())
    .then(data => {
        try{
          setProfiles(data.player.stats.SkyBlock.profiles || []);
          console.log("Hi");
        } catch(err) {
          return Promise.reject("Profile not found")
        }
    })
    .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    updateUuid("");
    setProfiles([]);
  }, [username])



  return (
    <div>
      <form onSubmit ={ e => {
        e.preventDefault();
        requestProfile();
      }}>
        <label htmlFor="username">
          <input id="username" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
      <h1>Your Profiles:</h1>
        <Results profiles={profiles} uuid={uuid}/>
    </div>
  );
}

export default Player;