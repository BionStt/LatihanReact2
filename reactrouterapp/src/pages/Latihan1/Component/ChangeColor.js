import React,{useState} from 'react'
//import './ChangeColor.css' //kalo di aktifkan jd hitam backgroundnya
const ChangeColor = (props) => {
    const [color, setColor] = useState('#4cb96b');

    const getClick=()=>{
        if (color==='#4cb96b'){
            setColor('#aaa')
        }else{
            setColor('#4cb96b')
        }
    }
    // ubah style css dgn object
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };

  return (
    <>
       <h1 style = {{ color:color }}
                   onClick = {getClick}>
               {props.title} asdada</h1>
        <h1 style={myStyle}>Hello Style!</h1>
   </>
  )
}

export default ChangeColor
