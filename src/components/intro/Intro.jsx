import "./intro.scss";
import {init} from 'ityped';
import { useEffect ,useRef} from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/women.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, There I'm</h2>
          <h3> Pallavi Bahekar </h3>
          <h3> Web <span ref={textRef}>Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
