import React from "react";
import {useFormik} from 'formik';
import './index.css'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
      logIn: false
    },
    onSubmit:  values => {
      if(values.logIn) {alert("Login Successful");}
    },
    validate: values => {
      let validEmail;
      let validPwd;
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
        validEmail=false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
        validEmail=false;
      } else {validEmail=true;}
      if(!values.password) {errors.password = "Field required"; validPwd = false;}
      else{validPwd = true;}

      if(validEmail&&validPwd){values.logIn = true;} 
      else{values.logIn = false;}
      console.log(values.logIn );
      

      return errors;
    } 
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Username/Email:    </label>
        <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        <div id= "emailError">
          {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        </div>
        
        <label>Password: </label>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        <div id= "pswError">
          {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        </div>
        <button id= "submitBtn" type="submit">Submit</button>
        
      </form>
    </div>
  );
}
//{formik.values.logIn? <div>{"Login Successful"}</div>: null}
export default App;
