import React, { useEffect } from "react";

export default function windowTracker(props) {

 

   const [windowWidth, setwindowwidth] = React.useState(window.innerWidth)

    useEffect(()=> {

    function wind(params) {
        console.log('setting up...')
            setwindowwidth(window.innerWidth)
    }

    window.addEventListener('resize', wind)

 return function () {
      console.log('cleaning up')
      window.removeEventListener('resize', wind)
  }


    }
     

    
    , [])


    
   
    return(
            <h1>{props.show == true ? <h1>window width : {windowWidth}</h1> : null}</h1>
    )
}


