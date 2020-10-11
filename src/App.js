import React from 'react';
import './App.css';
import "./profile/Profile"
import Prof from "./profile/Profile"
import prog from "./prog.png"

function App() {
  const styleObject={display:"flex" , justifyContent:"center" , flexDirection:"column" , alignItems:"center" , margin:"50px 350px"}
const handleName = (fullName) =>{
  return(alert(fullName))

}
  
  return (
        <>
          <div style={  styleObject}>
            <Prof fullName="Ali sami chaouch" profession="Python html css javascript unity" bio="hello evreyone" handleName={handleName}>{prog}</Prof>
          </div>
  
     
        </>
      );
    }


    export default App;
