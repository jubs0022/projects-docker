import "../css/header.css";
import {useState} from "react";

export default function Header(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () =>{
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle("dark-mode", newMode);
    };

    
    return(
        <section id="home">
            <div className="NavContainer" >    
                <ul>
                    <p>JUBS</p>  
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="">PROJECTS</a></li>
                    <div className="themeSwitch">
                        <div className="switchKnob" id="switchKnob" onClick={toggleTheme}>
                            <img
                                src={isDarkMode ? "/images/sun.png" : "/images/moon.png"}
                                width={18}
                                alt="theme icon"
                            />
                        </div>
                    </div>
                </ul>
            </div>
        </section>
        
    );
}