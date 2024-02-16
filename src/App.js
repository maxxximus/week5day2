import './App.css';
import ProfileInfo from './Components/ProfileInfo';
import Profile from './Model/Profile';
import { useState, useEffect } from 'react';
import image from './Untitled.png'


function App() {


  const [friendlist, setFriendlist] = useState([
    new Profile("Caroline Woods", 55, "image", "bristol")
  ])


  if(friendlist){
console.log("fffffccc", friendlist);
  }
  return (
    <div className="App">
      <div id ="sidebar"><h3>Get
        Faced</h3><p>Friends list:</p><ul>{friendlist.map((el)=>{return(<li>{el.name}</li>)})}</ul></div>




       
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
    <ProfileInfo action = {setFriendlist} friends = {friendlist}/>
 


    </div>
  );
}


export default App;
