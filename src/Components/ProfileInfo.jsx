import React, { useState, useEffect } from "react";
import './ProfileInfo.css'


import Profile from "../Model/Profile";


const ProfileInfo = (props) => {
  let [profile, setProfile] = useState(null);






  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setProfile(data.results[0]));
     
  }, []);


if(profile){
    console.log("www",profile);


}




  return (
    <div id="main">
      {profile && (
        <div>
        <div id="image"><img src={profile.picture.large} /><p> Age: {profile.dob.age}</p></div>
        <div id="profile"> <h2>{profile.name.first} {profile.name.last}
            </h2><p> Location: {profile.location.city}, {profile.location.country}</p><p>{}</p>
            <button onClick={() => props.action(  [...props.friends,  new Profile(profile.name.first+" "+ profile.name.last, 65, "image", "london")] )}>Friend Request</button></div>


        </div>
      )}
    </div>
  );
};


export default ProfileInfo;
