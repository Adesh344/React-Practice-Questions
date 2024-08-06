import React, { useState } from 'react'

function Thirteen() {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [isRegistered , setIsRegistered] = useState(false)
    const [isLogedin ,setIsLogedin] = useState(false)
    const [users , setUsers] = useState([])

    const handleAuthentication = () => {
        if(isRegistered){
            //Login
            if(isRegistered){
                const user = users.find((u)=>u.email===email && u.password === password)
                if(user){
                    setIsLogedin(true)
                }else{
                    alert('Login failed.Please Check your credintials')
                }
            }
        }else{
            //Register
            const newUser = { email , password}
            setUsers([...users,newUser])
            localStorage.setItem('users',JSON.stringify([...users,newUser]))
            setIsLogedin(true)
        }
    }

    const handleLogout = () =>{
        setIsLogedin(false)
        setEmail('')
        setPassword('')

    }


  return (
    <>
    {
        isLogedin?
        (<div>
            <h2>Welcome {email}</h2>
            <button onClick={handleLogout}>Logout</button>

        </div>):( 
            
        <div>

            <h2>{isRegistered ? "Login":"Register"}</h2>

    <form>
    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /> <br />

    <button onClick={handleAuthentication}>
        {isRegistered ? 'Login':'Register'}
    </button>
    </form>

    <p>
        {isRegistered ? "Dont have accoundt!register now":"Already have a account ! Log In"}
    </p>

    <button onClick={()=>
        setIsRegistered(!isRegistered)
        }>

        {isRegistered ? "Register" : "Login"}
    </button>
        </div>)
    }

    
    </>
  )
}

export default Thirteen