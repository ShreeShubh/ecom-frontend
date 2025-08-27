'use client'
import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Link from 'next/link'
import axios from 'axios'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    email: false,
    password: false,
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })

    if (value !== '') {
      setError((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (value.trim() === '') {
      setError((prev) => ({ ...prev, [name]: true }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let newErrors = {
      email: formData.email === '' || !emailRegex.test(formData.email),
      password: formData.password === '',
    }

    setError(newErrors)

    if (!newErrors.email && !newErrors.password) {
      try {
        //console.log('Form submitted:', formData)
        const url = 'http://localhost:8001/api/auth/login'

        const response = await axios.post(url, formData)

        //console.log('Login Successful:', response.data)

        localStorage.setItem('authToken', response.data.accessToken)

        setFormData({
          email: '',
          password: '',
        })
      } catch (error: any) {
        if (error.response) {
          console.error(
            'Login failed:',
            error.response.data.message || error.response.data
          )
        } else {
          console.error('Error:', error.message)
        }
      }
    }
  }

  return (
    <form className="w-full sm:w-3/5 flex flex-col" onSubmit={handleSubmit}>
      <FormControl
        fullWidth
        sx={{ marginBottom: 3 }}
        variant="outlined"
        error={error.email}
      >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          endAdornment={
            <InputAdornment position="end">
              <AlternateEmailIcon />
            </InputAdornment>
          }
          label="Email"
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" error={error.password}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <LockOpenIcon /> : <LockIcon />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      {/* Remember Me & Recovery Password */}
      <div className="flex items-center justify-end mt-3">
        {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRememberMe(e.target.checked)
            }
          />
          <label htmlFor="rememberMe" className="text-sm">
            Remember Me
          </label>
        </div> */}
        <Link
          className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Recovery Password
        </Link>
      </div>

      {/* Login Button */}
      <button
        className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Log In
      </button>
    </form>
  )
}

export default LoginForm
