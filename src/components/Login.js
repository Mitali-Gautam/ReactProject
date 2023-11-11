import React,{useState,useEffect} from "react"

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoggedIn,setLoggedIn] = useState(false)


  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if(storedUsername){
        setLoggedIn(true)
    }
  },[])  //This empty dependency array ensures that the effect runs once when the component mounts and doesn't run again for subsequent renders.

  const handleLogin = ()=>{
    localStorage.setItem('username',username);
    setLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLoggedIn(false)
  }
  
  return (
    <div>
        {isLoggedIn ? (
            <div>
            <p>Welcome, {localStorage.getItem('username')}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <div>
                <h2>Login Page</h2>
                <form>
                    <label>
                        Username : 
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>

                    <label>
                        Pasword : 
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="button" onClick={handleLogin}> Login </button>
                </form>
            </div>
            )
        }
    </div>
  )
}

export default Login;