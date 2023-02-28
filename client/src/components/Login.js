
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import validator from 'validator'
import { regexPassword } from '../utils'


console.log('function login');
function Login({ }) {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    is_admin: false,
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fetchError: false,
    fetchErrorMsg: '',
  })

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value
    let isCorrectValue =
      fieldName === 'email'
        ? validator.isEmail(currValue)
        : regexPassword.test(currValue)

    isCorrectValue
      ? setErrors({ ...errors, [fieldName]: false })
      : setErrors({ ...errors, [fieldName]: true })

    setValues({ ...values, [fieldName]: event.target.value })
  }

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }
  console.log('handle submit');

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          is_admin: values.false,
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
      // using the navigate function to redirect the user to the dashboard
      // logic for checking user status
      navigate('/dashboard');

      const data = await res.json()
      console.log({ data })

      // this is just a visual feedback for user for this demo
      // this will not be an error, rather we will show a different UI or redirect user to dashboard
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      })
      setValues({
        email: '',
        password: '',
        is_admin: false,
        showPassword: false,
      })
      return
    } catch (error) {
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

      <form className='login'>
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <input
          variant='filled'
          type='email'
          label='Email'
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
          helperText={errors.email && 'Please insert a valid email address'} />

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

      </form>
    </>
  )
}

export default Login
