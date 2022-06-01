import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Form } from 'react-bootstrap';


function Signup() {
  const initialValues = {

    name: '',
    email: '',
    phonenumber: '',
    password: '',
    
  };

  // const [image,setImage]= useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    const pnumber = /^[0-9]{10}$/;

  
    if (!values.name) {
      errors.name = 'Name is required!';
    } 
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.phonenumber) {
      errors.phonenumber = 'phonenumber is required';
    } else if (!pnumber.test(values.phonenumber)) {
      errors.phonenumber = 'Phonenumber must be a number(no text or special sign allowed)';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!pass.test(values.password)) {
      errors.password = 'Password be like (A-z)+(0-9)+@';
    }
    // if (!values.cpassword) {
    //   errors.cpassword = 'Confirm password is not empty';
    // } else if (values.password !== values.cpassword) {
    //   errors.cpassword = 'confirm Password is not match  ';
    // }
    return errors;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
   

    await axios.post(`http://127.0.0.1:8080/api/auth/`,formData)
    navigate('/')
    
  };

  return (
    <div>
      <section className="login">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
            <h1 className="h1 mb-6 fw-normal" style={{ color: "#152c5b" }}>Sign Up</h1>             
              <Form
                method="POST"
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
                
                <div className="form my-3" >
                        Name: <input type="text" name="name" value={formData.name} className="form-control" onChange={handleChange} id="name"
                            placeholder="Write Your Name" />
                            <p className="text-danger">{formErrors.name}</p>
                    </div>
                    <div className="form my-3">
                        Email: <input type="email" name="email" value={formData.email} className="form-control" onChange={handleChange} id="email"
                            placeholder="name@example.com" />
                            <p className="text-danger">{formErrors.email}</p>

                    </div>
                    <div className="form my-3">
                        phonenumber.: <input type="tel" name="phonenumber" value={formData.phonenumber} className="form-control" onChange={handleChange} id="phone"
                            placeholder="Mobile Number" maxLength={10}/>
                            <p className="text-danger">{formErrors.phonenumber}</p>

                    </div>
                    <div className="form my-3">
                        Password: <input type="password" name="password" value={formData.password} className="form-control" onChange={handleChange} id="Password" placeholder="Password" minLength={6} />
                            <p className="text-danger">{formErrors.password}</p>
                    </div>
                
          
                <div className="form-group form-button">
                  <input
                  style={{ backgroundColor: 'blue' }} 
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Sign Up"
                  />
                </div>
                <NavLink to="/" className="signup-image-link">
                  Already SignIn
                </NavLink>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;





// import React, { useState} from 'react'
// import axios from 'axios';
// import { useNavigate} from 'react-router-dom';
// import './Signup.css'


// export default function Signup() {

//     const navigate = useNavigate();

//     const[user ,setUser]= useState({
//         name:"",
//         email:"",
//         password:"",
//         phonenumber:""

//     })
 
//     const handleChange = e => {
//         const { name, value } = e.target;
//        setUser({
//             ...user,
//             [name]: value 
//         });
//     }

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();

//     //     if (handleFormValidation()) {
//     //         alert('You have been successfully registered.')
//     //         this.setState(this.initialState)
//     //     }
//     // }
//     const signup = ()=>{
//         const { name, email,password ,phonenumber} = user 
//         if( name &&  email && password && phonenumber ){
//         axios.post("http://localhost:8080/api/auth/", user)
//         .then(res => {
//             alert(res.data.message)
//             navigate("/")
//         })
//     }else{
//         alert("invalid input")
//     }
// }

//     // const validateForm = () => {
//     //     this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
//     // }

//     return (
//                  <div className='login'>
//                     <h1 className="h1 mb-6 fw-normal" style={{ color: "#152c5b" }}>Sign Up</h1>
//                     <div className="form my-3" >
//                         Name: <input type="text" name="name" value={user.name} className="form-control" onChange={handleChange} id="name"
//                             placeholder="Write Your Name" />
//                     </div>
//                     <div className="form my-3">
//                         Email: <input type="email" name="email" value={user.email} className="form-control" onChange={handleChange} id="email"
//                             placeholder="name@example.com" />
//                     </div>
//                     <div className="form my-3">
//                         phonenumber.: <input type="tel" name="phonenumber" value={user.phonenumber} className="form-control" onChange={handleChange} id="phone"
//                             placeholder="Mobile Number" />
//                     </div>
//                     <div className="form my-3">
//                         Password: <input type="password" name="password" value={user.password} className="form-control" onChange={handleChange} id="Password" placeholder="Password"/>
//                     </div>
//                     <button className="w-100 btn btn-lg btn-primary" onClick={signup} style={{ backgroundColor: 'blue' }} type="submit">Sign up</button>
//                     <p>OR</p>
//                     <button className="w-100 btn btn-lg btn-primary" onClick={() => navigate('/')} style={{ backgroundColor: 'blue' }} type="submit">Sign in</button>

                
            
//         </div>
//     )
// }





// // const handleUserInput = (e) => {
// //     const name = e.target.name;
// //     const value = e.target.value;
// //     this.setState({ [name]: value },
// //         () => { this.validateField(name, value) });
// // }
// // const handleFormValidation = (fieldName, value) => {
// //     let fieldValidationErrors = this.state.formErrors;
// //     let emailValid = this.state.emailValid;
// //     let passwordValid = this.state.passwordValid;
// //     let phonenumberValid = this.state.phonenumberValid;

// //     switch (fieldName) {
// //         case 'email':
// //             emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
// //             fieldValidationErrors.email = emailValid ? '' : ' is invalid';
// //             break;
// //         case 'password':
// //             passwordValid = value.length >= 6;
// //             fieldValidationErrors.password = passwordValid ? '' : ' is too short';
// //             break;
// //         case 'tel':
// //             phonenumberValid = value.length = 10;    
// //             break;
// //         default:
// //             break;
// //     }
// //     this.setState({
// //         formErrors: fieldValidationErrors,
// //         emailValid: emailValid,
// //         passwordValid: passwordValid
// //     }, this.validateForm);
// // }