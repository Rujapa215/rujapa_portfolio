import './App.css'
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Draggable, {DraggableCore} from 'react-draggable';
import github from '../src/assets/github.svg'
import linkedin from '../src/assets/linkedin.svg' 
import React from 'react';
import {
  enable,
  disable,
  isEnabled,
} from 'cursor-flashlight';
import project_screenshort from './assets/Screenshot 2023-10-30 002134.png'


function App() {
  const [isDragged, setIsDragged] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textColor, setTextColor] = useState(false);


  const playerRef = useRef(null);
  const audioUrl = 'https://www.youtube.com/watch?v=JD4mT4Lzgao';

  const handleDrag = () => {
    setIsDragged(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  };
  
  const handleToggleFlashlight = () => {
    if (isEnabled()) {
      disable()
      setTextColor(false)
    } else {
      enable({ size: '12vmax' })
      setTextColor(true)
    }
  }
  


  return (
    <>
      <div className='screen'>
      <h1>Hello</h1>
       <p style={{fontSize: "48px"}}>I am Rujapa Dhonsingha</p>
       <p>Full-stack developer</p>
       <p>Life long lerner</p>
       <p>Tech Enthusiast</p>
       <p>person who always full of curiosity and crativity😉</p>
       <div>
        <a href="https://github.com/Rujapa215">
        <img style={{ width: '50px', height:'50px' }} src={github} alt="icon github"  />
        </a>
       
       <a href="https://www.linkedin.com/in/rujapa-dhonsingha/">
       <img style={{ width: '50px', height:'50px' }} src={linkedin} alt="icon linkedin" />
       </a>
       
       </div>
      
       <br />
       <ReactPlayer
          ref={playerRef}
          url={audioUrl}
          playing={isPlaying}
          controls={true}
          loop={true}
          width={0}
          height={0}
          volume={0.1}
        />
       <button className='musicBtn' onClick={togglePlay}>{isPlaying ? '🔊': '🔇' }</button>
      </div>


      <div >
      <div className= {`cardPull ${isDragged ? 'dragged' : ''}` }>
      <Draggable  axis="y" positionOffset={{x: '-10%', y: '600px'}} onDrag={handleDrag}>
       <div >
      <h2 > 🔼Drag me up to see skills</h2>
       <p>React</p>
       <p>Javascript</p>
       <p>HTML</p>
       <p>CSS</p>
       <p>Tailwind</p>
       <p>Bootstrap</p>
       <p>Node.js</p>
       <p>Express</p>
       <p>MongoBD</p>
       <p>Canva</p>
       <p>Figma</p>
       <p>GIT, Github</p>
       <p>Agile and Scrum</p>
       <p>Adaptive to change</p>
       <p>Prompt engineering</p>
       <p>↑</p>
       </div>
      </Draggable>
      </div>
      </div>

      <br />
      <br />
     
       
      <div className='screen'>
        <div>
        
          <h2>Group Project</h2>
          <a href="https://project-mlb.vercel.app/">
          <img className='pic1'
        src= {project_screenshort} alt="project svreensort" />
          </a>
          <br />

          <a href="https://project-mlb.vercel.app/">
            <button className='btn'>Visit</button>
          </a>

          <a href="https://github.com/Grop-project-8">
          <button className='btn'> Github</button>
          </a>
          
       
        <h2>Exprience</h2>
        <p>I'm seeking a new exiteing one</p>
        <h2>Education</h2>
        <p>Generation Thailnad | Junior Software Developer 5</p>
        <h2>Resume</h2>
        <a href="https://docs.google.com/document/d/1Nb1alZFF-3pvhboFyq7XX6Vq8be1uUeLoTpVz5KetHQ/edit?usp=sharing">
          <p>Click to view my resume</p>
        </a>
        </div>
      </div> 


      <div className='screen'>
      
        <h2>What I'm interest and learning right now</h2>
        <p>Android deveoping using Compose and Kotin (just geting started on developer.android.com)</p>
        <p>🗻 Japanese language 🗼and cooking Japanese food 🍱</p>
        <p>Python</p>
        <p>User Exprirence</p>
        <p style={{color: ''}} >Data modeling cureently on linkedin learning</p>
        <p>Geography 🌏, Green tech 🌳(i really mean it)</p>
        <p>stock investing</p>
        <p>Improving myself</p>
        <p>and more...</p>
          
        
    </div>
    
  
    <div className='screen'>
     
      <p> scan to view my contact</p>
      <button onClick={handleToggleFlashlight} /*style={{background: textColor}}*/ >grab 🔦 to scan my email</button>
      <br /><br /><br /><br /><br /><br /><br/><br /><br />
      <a href="mailto:rujapa.dh@gmail.com"> <p className={`email ${textColor ? 'hovered' : ''}`} >👉 ✨rujpa.dh@gmail.com ✨👈</p></a> 
    </div>
    </>
  )
}

export default App
