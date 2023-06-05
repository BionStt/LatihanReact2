import React ,{ useState }from 'react'
import logo from '../../../../logo.svg'
import SampleInput2 from './../SampleInput2'
import './SignUpForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  minMaxLength,
  validEmail,
  passwordStrength,
  userExists,
  validateConfirmPassword
} from './validations'

export default function SignUpForm() {
  const [user, setUser] = useState({})
  const [formErrors, setFormErrors] = useState({})

  function handleChange(e){
    const { name, value } = e.target
    // let formErrors = this.state.formErrors
    let currentFormErrors = { ...formErrors }

    switch (name) {
      case 'firstName':
        //  setUser({ ...user, firstName: value })
        if (minMaxLength(value, 3)) {
          currentFormErrors[
            name
          ] = `First Name should have minimum 3 characters`;
        } else {
          delete currentFormErrors[name];
        }
        break;

      case 'lastName':
          // setUser({ ...user, lastName: value })
          if (minMaxLength(value, 3)) {
            currentFormErrors[
              name
            ] = `Last Name should have minimum 3 characters`;
          } else {
            delete currentFormErrors[name];
          }
        break;

      case 'email':
          // setUser({ ...user, email: value })
          if (!value || validEmail(value)) {
            currentFormErrors[name] = `Email address is invalid`;
          } else {
            userExists(value).then((result) => {
              if (result) {
                currentFormErrors[name] =
                  'The email is already registered. Please use a different email.';
              } else {
                delete currentFormErrors[name];
              }
            });
        }
        break;

      case 'password':
          // setUser({ ...user, password: value })
          if (minMaxLength(value, 6)) {
            currentFormErrors[name] = 'Password should have minimum 6 characters';
          } else if (passwordStrength(value)) {
            currentFormErrors[name] =
              'Password is not strong enough. Include an upper case letter, a number or a special character to make it strong';
          } else {
            delete currentFormErrors[name];
            setUser({
              ...user,
              password: value,
            });
            if (user.confirmpassword) {
              validateConfirmPassword(
                value,
                user.confirmpassword,
                currentFormErrors
              );
              // setFormErrors(currentFormErrors);
            }
          }
        break;

      case 'confirmpassword':
          // setUser({ ...user, confirmpassword: value })
          let valid = validateConfirmPassword(
            user.password,
            value,
            currentFormErrors
          );
          if (valid) {
            setUser({ ...user, confirmpassword: value });
          }
          break;

      default:
        break;
    } 
    setFormErrors(currentFormErrors);
    setUser({ ...user, [name]: value });
  }
  
  function submit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <div className='App container col-6'>
        
    <h3>New User Registration Form</h3>
    <ul>
      {Object.entries(formErrors || {}).map(([prop, value]) => {
        return (
          <li className='error-message' key={prop}>
            {value}
          </li>
        );
      })}
    </ul>
    <form onSubmit={submit} noValidate>
      <div className='row'>
        <div className='col-md-6'>
          <label htmlFor='firstName'>First Name</label>
          <SampleInput2
            // className='form-control'
            className={
              formErrors && formErrors.firstName
                ? 'form-control error'
                : 'form-control'
            }
            placeholder='First Name'
            type='text'
            name='firstName'
            noValidate
            onBlur={handleChange}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='lastName'>Last Name</label>
          <SampleInput2
            // className='form-control'
            className={
              formErrors && formErrors.firstName
                ? 'form-control error'
                : 'form-control'
            }
            placeholder='Last Name'
            type='text'
            name='lastName'
            noValidate
            onBlur={handleChange}
          />
        </div>
      </div>

      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <SampleInput2
          // className='form-control'
          className={
            formErrors && formErrors.firstName
              ? 'form-control error'
              : 'form-control'
          }
          placeholder='Email'
          type='email'
          name='email'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password</label>
        <SampleInput2
          // className='form-control'
          className={
            formErrors && formErrors.firstName
              ? 'form-control error'
              : 'form-control'
          }
          placeholder='Password'
          type='password'
          name='password'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='confirmpassword'>Confirm Password</label>
        <SampleInput2
          // className='form-control'
          className={
            formErrors && formErrors.firstName
              ? 'form-control error'
              : 'form-control'
          }
          placeholder='Password'
          type='password'
          name='confirmpassword'
          noValidate
          onBlur={handleChange}
        />
      </div>
      <div className='mb-3'>
        <button type='submit'
        disabled={Object.entries(formErrors || {}).length > 0}
        >Create Account</button>
        
      </div>
    </form>
  </div>
  )
}
