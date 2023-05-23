import React from "react";


export default function Box(props) {


    const [control,setcontrol] = React.useState(props.on)

   
   
    function Toggle(params) {
        setcontrol(
            (prev) => {
                return !prev
            }
        )
    } 

    


    

    

    

    const styles = {
        backgroundColor : control ? 'transparent' : 'red',
        width : '80px',
        height : '100px',
        border : 'black',
        display: 'flex',
        flexDirection : 'flex-row',
        borderStyle : 'solid'
    }

    return(
        <div style={styles}  className='' 
        onClick={Toggle}>   
        </div>
    )
}
