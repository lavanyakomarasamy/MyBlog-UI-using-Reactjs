import React,{ Component } from 'react';
import imgsrc from './profile.jpg';

import csscls from './home.module.css';

class Home extends Component {  
    render() {     
      return (
        <div className ={csscls.MainDiv}>
            <img src={imgsrc} alt="profile" />
            <div className ={csscls.LeftDiv}>
                <h1 className ={csscls.FontXLarge}>
                    Hello,      
                </h1>
                <h4>
                    a bit more about me:
                </h4>
                <p>
                    <span>
                        I am a fullstack developer. Having a 7+ years of experience in Telecom & Elearning domain. Hands on experience on Java, Spring Boot, Angular, Reactjs, Nodejs technologies.  
                    </span>
                </p>
            </div>
        </div>
      );
    }
  }
  
export default Home