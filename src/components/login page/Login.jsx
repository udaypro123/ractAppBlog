import React, { useContext } from 'react'
import './login.css'
import { authcontext } from '../contextapi/contextapi'

const Login = () => {

  const { setislogin, password, setpassword, inputvalue, setinputvalue } = useContext(authcontext)

  
  const submitclick = () => {
    if (inputvalue.length<3 && password.length<5) {
      alert("input length should be greater than 3 and password length should be  5 ")
    }else if(inputvalue.length>3 && password.length >5){
      setislogin(true)

    } else {
      setislogin(false)
    }
  }

  return (
    <>
      <div className="container" id='loginconatiner' >

        <div className="row g-3">
          <div className="col divpart">
            <img src="https://geekflare.com/wp-content/uploads/2022/08/Message-Brokers1.png" alt="" />
          </div>


          <div className="col divpart2">

            <input type="text" placeholder='enter username' value={ inputvalue } onChange={ (e) => {
              setinputvalue(e.target.value)
            } } />
            <input type="password" placeholder='password' value={ password } onChange={ (e) => {
              setpassword(e.target.value)
            } } />
            <button className="btn btn-primary" onClick={ submitclick }>Log in</button>

            
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
