import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {

  const [count,setCount] =   React.useState(0)

  function Add() {
      setCount( prevCount => prevCount + 1
        )
  }

  function Substract() {
     setCount(prevCount => prevCount + 1  )
  }

    return(
       <section className="mx-auto flex w-full  bg-red-900">
            <div className='flex w-1/2 mx-auto space-x-4'>
            <button className="bg-gray-500 p-5 h-6 mt-20 pb-10 rounded-full" onClick={Substract}>–</button>
            <div className="counter--count">
                <h1 className='bg-white p-20 rounded-full text-6xl font-bold'>{count}</h1>
            </div>
            <button className="bg-gray-500 p-5 h-6 mt-20 pb-10 rounded-full" onClick={Add}>+</button>
            </div>
        </section>
    )
}

export default App
