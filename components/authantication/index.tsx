
/**
 * @since Jan 2025
 * @author Twizerimana Gedeon <gedeontwizerimana6@gmail.com>
 * @see {@link https://www.linkedin.com/in/twizerimana-gedeon-086791296/} - Author's website
 */

"use client"
import { useState } from "react"
import Login from "./login"
import Signup from "./signup"

const Authantication = () =>{

    const [login,setLogin]=useState(true)
    const [signup,setSignup]=useState(false)

    const handleLogin=()=>{
       setLogin(true)
       setSignup(false)
    }
    const handleSignup = ()=>{
        setSignup(true)
        setLogin(false)
    }
  return (
    <>
     {
        login && (<Login onClick={handleSignup}/>)
     }
     {signup && (<Signup onClick={handleLogin}/>)}
    </>
  )
}
export default Authantication