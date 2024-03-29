import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { ReactDOM } from 'react'
import boxes from './boxes'
import Box from './box'
import WindowTracker from './width'
//import form from './form'



export default function App(params) {

 const [show, setShow] = React.useState(true)


 function Button(params) {
    setShow(prev => {
        return !prev
    })
 }
    return(
        <div className=''>
          <button onClick={Button}>
            toggle windowTracker
          </button>
          <WindowTracker 
          show={show}/>
        </div>
    )
}














































//////////////////////////////////////////////////////////////////  MAKING API CALLS **** MAKING API CALLS **** MAKING APIO CALLS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
export default function App(params) {

  const [form, setform] = React.useState({
    text : '',
    number : '',
    image : ''
  })



  const [img, setimg] =React.useState([])


  function Button(params) {
     const random = Math.floor(Math.random() * img.length)
     const url = img[random].url
     setform(prev => {
        return{
            ...prev, image : url
        }
     })
  }



  

  React.useEffect(()=> {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setimg(data.data.memes))
  })


function Form(event) {
    setform(prev => {
        return{
            ...prev, [event.target.name] : event.target.value
        }
    })
}


 function preventBtn(event) {
    event.preventDefault()
 }



    return(
       <form action="" onSubmit={preventBtn} className='w-2/3  flex flex-row mx-auto' >

        <input 
        type="text"
        name='text'
        value={form.text}
        onChange={Form}
        className='border-black border-2'/>

        <input type="number"
         id=""
         name="number"
         value={form.number}
         onChange={Form}
         className='border-black border-2'/>


         <img src={form.image} alt="" className='w-40'/>


         <div className='bg-green-900'>
           <h2 className='border border-2 w-40 bg-red-900'>{form.text}</h2>
           <p className='border border-2 w-40 bg-yellow-900'>{form.number}</p>
         </div>


         <button onClick={Button}>press it</button>

       </form>

    )
}
*/






































/*export default function App(params) {

 const [count, setCount]  = React.useState(1)
 const [star,setstar] = React.useState({})


 React.useEffect(()=> {
    fetch(`https://swapi.dev/api/people/ ${count}`)
            .then(res => res.json())
            .then(data => console.log(data))
    
 }, [count])

   return(
    <div>
        <pre>{JSON.stringify(star, null, 2)}</pre>
        <h1>count is {count}</h1>
        <button onClick={()=> setCount(prev => prev + 1)}>get next character</button>
    </div>
   )
} */













/////////////////////////////////////////
////////////////
////FORM IN REACT
///////////////////////
////////////////////////////////////////////
////////////////////////////////////////////////////////



/*export default function App(params) {

const [form, setForm] = React.useState(
    {
        email : '',
        password : '',
        cpass : "",
        checkbox : false
    }
)


console.log(form.email)

function Handle(event) {

    const {type, name, checked, value} = event.target

    setForm(
        (prev) => {
            return {
                ...prev, [name] : type === 'checkbox' ? checked : value
            }
        }
    )

    console.log(form)
}

function submit(event) {
    event.preventDefault()

    if (form.checkbox === true) {
        console.log('thanks for giving newslatter')
    } 
    
          if (form.password === form.cpass) {
            console.log('Succesfully signed up')
          } else {
            console.log('passwords do not match')
          } 
}




    return(
        <section className=' p-40 '>
            <form className='w-1/2 mx-auto bg-white flex flex-col space-y-8 p-4 rounded-2xl' onSubmit={submit}>

              <input 
              className='border-2 border-black w-80 mx-auto h-12 rounded-2xl'
              type="email" 
              name="email" 
              id=""
              placeholder="Email"
              onChange={Handle}
              value={form.email} />

             <input 
             className='border-2 border-black w-80 mx-auto h-12 rounded-2xl'
             type="password"
             name="password" 
             id="" 
             placeholder='password'
             onChange={Handle}
             value={form.password}/>

             <input 
             className='border-2 border-black w-80 mx-auto h-12 rounded-2xl'
             type="password"
             name="cpass"
             id="" 
             placeholder='confirm password'
             onChange={Handle}
             value={form.cpass}/>


             <div
             className='w- mx-auto flex flex-row space-x-4 '>
            
             <input 
             type="checkbox" 
             name="checkbox" 
             id="join"
             onChange={Handle}
             checked={form.checkbox} />

             <label htmlFor="join">i want to join the newslatter</label>

             </div>

             <button className='border-2 w-60 mx-auto h-10 bg-purple-600 rounded-lg' type='submit' onChange={Handle}>sign up</button>




            </form>
        </section>
    )
} */


/* export default function App(params) {

  const [form, setForm] = React.useState(
    {
        email: '',
        password: '',
        text : '',
        checkbox : false,
        employment : '',
        favColor: ''
    }
  )

  console.log(form.employment)

  console.log(form.favColor)

  function Handle(event) {
  
    const {type, name, value, checked}  = event.target

      setForm(prev => {
        return{
            ...prev, [name] : type === 'checkbox' ? checked : value
        }
      })

      console.log(form)
  }

  function submit(event) {
      event.preventDefault()
  }


    return(
        <form action="" onSubmit={submit}>
            <input type="email"
             name="email"
             id=""
             onChange={Handle} 
             placeholder='email'
             value={form.email}/>
    
            <input type="password"
                name="password"
                id="" 
                onChange={Handle}
                placeholder='password'
                value={form.password}/>

             <textarea 
             type="text" name="text"
             id="" 
             cols=""
             rows="" 
             placeholder='text'
             value={form.text}
             onChange={Handle}/>

              <input type="checkbox"
               name="checkbox"
               id="mad"
               onChange={Handle}
               checked={form.checkbox} />

            <label htmlFor="mad">are you mad</label>
         
         <br />
         <br />


         <fieldset>

        <legend>current employment status</legend>

         <input 
         type="radio"
         name="employment"
         id="full-time"
         value='full-time' 
         checked={form.employment === 'full-time'}
         onChange={Handle}/>

         <label htmlFor="full-time">full time</label>

         <input 
         type="radio"
         name="employment"
         id="part-time" 
         value='part-time'
         onChange={Handle}
         checked={form.employment === 'part-time'}
         />

         <label htmlFor="part-time">part-time</label>

         <input 
         type="radio"
         name="employment"
         id="freelance"
         value="freelance"
         onChange={Handle}
         checked={form.employment === 'freelance'}/>

         <label htmlFor="freelance">freelance</label>

         </fieldset>


        <label htmlFor="favColor"></label>

        <select name="favColor" id="favColor" onChange={Handle}>
          <option value="">select here</option>
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="black">black</option>

        </select>


        <button type='submit'>submit</button>
        

        </form>
    )
} */


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