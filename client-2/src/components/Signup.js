import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import { regexPassword } from '../utils'
import Link from '@mui/material/Link';
console.log('signup function login');

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    showPassword: false,
    showRepeatPassword: false,
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    fetchError: false,
    fetchErrorMsg: '',
  })

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value
    // eslint-disable-next-line default-case
    switch (fieldName) {
      case 'email':
        validator.isEmail(currValue)
          ? setErrors({ ...errors, email: false })
          : setErrors({ ...errors, email: true })
        break

      case 'password':
        regexPassword.test(currValue)
          ? setErrors({ ...errors, password: false })
          : setErrors({ ...errors, password: true })
        break

      case 'repeatPassword':
        currValue === values.password
          ? setErrors({ ...errors, repeatPassword: false })
          : setErrors({ ...errors, repeatPassword: true })
        break
    }
    setValues({ ...values, [fieldName]: event.target.value })
  }

  const handleShowPassword = (showPasswordField) => {
    setValues({
      ...values,
      [showPasswordField]: !values[showPasswordField],
    })
  }
  console.log('submit');

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })

      if (!res.ok) {
        const error = await res.json()


        return setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: error.msg,
        })
      }
      // redirecting user to login on successful registration
      navigate('/');
      const data = await res.json()
      // this is just a visual feedback for user for this demo
      // this will not be an error, rather we will show a different UI or redirect user to dashboard
      // ideally we also want a way to confirm their email or identity
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      })
      setValues({
        email: '',
        password: '',
        is_admin: '',
        repeatPassword: '',
        showPassword: false,
        showRepeatPassword: false,
      })
    } catch (error) {
      return
      // eslint-disable-next-line no-unreachable
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg:
          'There was a problem with our server, please try again later',
      })
    }
  }

    //icon color switch
    const [isActive, setIsActive] = useState(false);
    //password show/hide
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
      setIsActive((current) => !current);
    };

  return (
    <>
      <form className='login'
      onSubmit={handleSubmit}>
        <h1>Register</h1>

        <label htmlFor='email'>Email</label>
        <input
          variant='filled'
          type='email'
          label='Email'
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
          helperText={errors.email && 'Please insert a valid email address'} 
          />

        <label htmlFor='password'>Password</label>

        <input id='password-field'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          error={errors.password} >

          <i className='far fa-eye'
            id='togglePassword'
            style={{ color: isActive ? "gray" : "" }}
            onClick={togglePassword}
          />
        </input>
{/* FIXME remove MUI components */}
        <p error={errors.password}>
                Password must be at least 8 characters, have one symbol, 1
                uppercase letter, 1 lowercase and 1 digit
              </p>

<label htmlFor='password'>Repeat password</label>

<input id='password-repeat-field'
 type={values.showRepeatPassword ? 'text' : 'password'}
 value={values.repeatPassword}
 onChange={handleChange('repeatPassword')} >

<i className='far fa-eye'
            id='togglePassword'
            style={{ color: isActive ? "gray" : "" }}
            onClick={togglePassword}
          />

 </input>
{/* FIXME remove MUI components */}
 {errors.repeatPassword && (
                <p error={errors.repeatPassword}>
                  Password must be the same as above
                </p>
 )}

        <button
        type='submit'
        >
          Sign Up
          </button>
          
          {/* FIXME remove MaterialUI components */}
          {errors.fetchError && (
              <p error>{errors.fetchErrorMsg}</p>
            )}

              Already have an account?{' '}
              <Link component={RouterLink} to='/'>
                Login here
              </Link>
              {/* FIXME end */}
      </form>
    </>
  )
}

export default Signup
