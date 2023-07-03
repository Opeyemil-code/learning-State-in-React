import React from "react";


export default function Box(props) {

console.log(props.id)
    

   
   const [control,setcontrol] = React.useState(props.on)

   
   
    

    const styles = {
        backgroundColor : control ? 'transparent' : 'red',
        width : '80px',
        height : '100px',
        border : '2px solid',
        display: 'flex',
        flexDirection : 'flex-row',
        borderStyle : 'solid'
    }

    return(
        
    <div style={styles}  className='' onClick={()=>props.Toggle(props.id)}>   
    </div>
        
    )
}
