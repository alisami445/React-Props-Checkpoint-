import React from 'react';
import './App.css';
import "./profile//profile"
import Prof from "./profile/profile"
import "./profile/img"
import Image from "./profile/img"
import prog from "./prog.png"
import "./profile/alert"
import Aler from "./profile/alert"
function App() {
  const styleObject={display:"flex" , justifyContent:"center" , flexDirection:"column" , alignItems:"center" , margin:"50px 350px"}
  const ooo = n => alert(n);
  return (
        <>
          <div style={  styleObject}>
            <Prof/>
            <Image img={prog}/>
            <Aler alertt={ooo}/>
          </div>
  
     
        </>
      );
    }


    export default App;
