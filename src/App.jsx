import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { ReactDOM } from 'react'
import boxes from './boxes'
import Box from './box'



export default function App(params) {

 

const [form, setForm] = React.useState({gmail : '', password: ''})


function FORM(event) {
    setForm(prev => {
        return{
            ...prev, [event.target.name] : event.target.value
        }

    })
  console.log(form)
}


    return(
        <form action="">
            <input type="email"
             name="gmail" 
             id="" 
             placeholder='gmail'
             onChange={FORM}/>

             <input type="password"
              name="password"
             id=""
             placeholder='gmail' 
             onChange={FORM}/>
        </form>
    )
}


/*  export default function App(params) {

  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('')

  function updateEmail(event) {
      setEmail(prev => event.target.value)
      console.log(email)
  }

  function updatePassword(event) {
      setPassword(prev => event.target.value)
      console.log(password)
  }


    return(
        <>
        <form action="" className='flex flex-col  border-black w-40 mx-auto space-y-6'>
            <input type="email"
             name=""
             id="" 
             placeholder='Gmail' className='border-2 border-black'
             onChange={updateEmail}/>

             <input type="password"
             name="" 
             id=""
             placeholder='last Name'
             className='border-2 border-black'
             onChange={updatePassword}/>
        </form>
        </>
    )
}  */



/*export default function App(props) {

    
const [squares, setSquares] = React.useState(boxes)
 

function Toggle(id) {
    setSquares(prev => {
       return prev.map((square)=> {
          square.id === id ? {...square, on : !square.on} : square
       })
    })
  }



    const squareEl = squares.map(
        (params) => {
            return <Box
                key={params.id} 
                id={params.id}
                on={params.on} 
                Toggle={Toggle}/>
        }
    )

  

     return( 
         <main>
            <div className='space-x-2 flex flex-row'>{squareEl}</div>
         </main>
     )
}
*/




/*
border-2 border-black bg-black rounded-lg w-96 h-40 mt-10'


className='flex flex-row space-x-6' */





/*setsquare(
    (prev) => {
       const newSquares = []
       for (let i = 0; i < prev.length; i++) {
        const currentSquare = prev[i]
        if (currentSquare.id === id) {
            const updatedSquare = {
                ...currentSquare, on : !currentSquare.on
            }
            console.log(id)
            newSquares.push(updatedSquare)
        } else {
            newSquares.push(currentSquare)
        }
        
       } 
       return newSquares
    }
    
   ) 
*/





/*export default function App(params) {
    const [contact, setContact] = React.useState(
        {
            Firstname : 'opeyemil',
            LastName : 'Toheeb',
            phone : 8180152128,
            email : 'opeyemitoheeb31@gmail.com',
            isFavorite : true
        }
    )

 
    const change = contact.isFavorite ? 'ronaldo' : 'messi'

   function Toggle(params) {
       setContact(
        (prevState) => {
            return{
               ...prevState,
               isFavorite: !prevState.isFavorite
            }
        }
       )  
    }


    return (
        <main>
            <article className="card">
                <button onClick={Toggle}>button</button>
                <p>{change}</p>
                <div className="card--info">
                    <h2 className="card--name">
                        {contact.Firstname}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
    
} */





















/*export default function App(params) {


const [thingsArray, setThingsArray] = React.useState([
    'things 1', 'things 2'
])

const ThingsDisplay = thingsArray.map(
    (things) => {
        return(
            <p key={things}>{things}</p>
        )
    }
)

function add(params) {
    setThingsArray(
        (prevState)=> {
           return [...prevState, `Things${prevState.length +1}`] 
        }
    )
}

console.log(ThingsDisplay)


    return(
        <div>
            <button onClick={add}> add
            </button>
           {ThingsDisplay}
        </div>
    )
}



*/

















/*export default  function App() {

const [isGoingOut, setIsGoingOut] = React.useState(true)

function Flip(params) {
    setIsGoingOut(
        (prevState) => {
            return !prevState
        }
    )
}

 

  return (
    <div className="text-white text-center bg-black text-4xl mt-80">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="mt-10 text-center mx-auto flex justify-center" onClick={Flip}>
            <h1 className='border py-6 px-4 rounded-full bg-white text-black'>{isGoingOut ? 'yes' : 'No'}</h1>
        </div>
    </div>
)
 
}   */


/*import Count from './count'



export default function App(params) {

const [count, setCount] = React.useState(0)

function Add(params) {
    setCount(prevState => 
        (
            prevState + 1
        )
    )
}


function Subtract(params) {
     setCount(function (oldValue) {
        return(
            oldValue - 1
        )
     })
}

 console.log("App component rendered")

    return(
        <section className="mx-auto flex w-full  bg-red-900">
            <div className='flex w-1/2 mx-auto space-x-4'>
            <button className="bg-gray-500 p-5 h-6 mt-20 pb-10 rounded-full" onClick={Subtract}>–</button>
             <Count number={count}/>
            <button className="bg-gray-500 p-5 h-6 mt-20 pb-10 rounded-full" onClick={Add}>+</button>
            </div>
        </section>
    )
}  
 

    
   */ 