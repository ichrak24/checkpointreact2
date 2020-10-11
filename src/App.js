import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./style.css";
import VideoPlayer from "react-video-js-player";
import  myVideo from "./myVideo.mp4";
import image from "./imageInSrc.jpg";


function App() {


  return (
    <div className="App">
 
      <div style={{ border:"solid 1px black", maxWidth: '100vw'}}/>
        <h1 className='titleRed' >Ichrak Guesmi</h1>
        <br />
       <img className="imagee" src={image} alt="imaInSrc"/>
       <br />
        <img className="imagee" src="/images/imageInpublic.jpg" alt="imageInpublic" />
        
        <br />
      
      <VideoPlayer className='video-js' 
      src={myVideo}
      poster={"./myVideo.mp4"}  width="320" height="240" controls= "controls" playBackRates={[0.5,1,3.85,16]} />
     

    </div>
  );
 }

export default App; 
