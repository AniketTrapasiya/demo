
import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signin = (props) => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json)
    if (json.success){
      localStorage.setItem('token', json.authtoken);
      navigate('/products')
      props.showAlert(json.message,"success");
    }
    else{
      alert(json.message,"danger");
    }
  }

  const onChange = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <div className='login'>

     
        <h1 className="h1 mb-6 fw-normal" style={{ color: "#152c5b" }}>Sign In</h1>
        <form onSubmit={handleSubmit}>
        <div className="form my-3">
          Email: <input type="email" name="email" value={credentials.email} className="form-control" onChange={onChange} id="floatingInput"
            placeholder="name@example.com"  />
        </div>
        <div className="form my-3">
          Password: <input type="password" name="password" value={credentials.password} className="form-control" onChange={onChange} id="floatingPassword" placeholder="Password"  />
        </div>
        <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: 'blue' }} type="submit">Sign in</button>
      </form>
      <p>OR</p>
      <button className="w-100 btn btn-lg btn-primary" onClick={() => navigate('/signup')} style={{ backgroundColor: 'blue' }} type="submit">Sign up</button>
    </div>
  )
}

export default Signin



// import React, { useState } from 'react'
// import axios from 'axios';
// import './Signup.css'
// import { useNavigate } from 'react-router-dom';
// const Signin = ({ setSigninUser }) => {
//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   })

//   const navigate = useNavigate();

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value
//     });
//   }

//   const signin = async() => {
//     await axios.post("http://localhost:8080/api/auth/login", user)
//       .then(res => {
//         alert(res.data.message)
//         // console.log(res.data)
//         setSigninUser(res.data.user)
//         navigate('/userprofile')
//       }).catch(error => {
//         console.log(error.message)
//       })
//   }


//   return (
//     <div className='login'>

//       <h1 className="h1 mb-6 fw-normal" style={{ color: "#152c5b" }}>Sign In</h1>

//       <div className="form my-3">
//         Email: <input type="email" name="email" value={user.email} className="form-control" onChange={handleChange} id="floatingInput"
//           placeholder="name@example.com" required />
//       </div>
//       <div className="form my-3">
//         Password: <input type="password" name="password" value={user.password} className="form-control" onChange={handleChange} id="floatingPassword" placeholder="Password" required />
//       </div>
//       <button className="w-100 btn btn-lg btn-primary" onClick={signin} style={{ backgroundColor: 'blue' }} type="submit">Sign in</button>
//       <p>OR</p>
//       <button className="w-100 btn btn-lg btn-primary" onClick={() => navigate('/signup')} style={{ backgroundColor: 'blue' }} type="submit">Sign up</button>
//     </div>
//   )
// }

// export default Signin;
