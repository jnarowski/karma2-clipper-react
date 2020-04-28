import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setLogin } from '../../background/store/modules/settings'
import { postAccountSignin } from '../../services/apiService'
import backgroundLog from 'utils/backgroundLog'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      const resp = await postAccountSignin({ email, password })
      backgroundLog(resp)
      const user = resp.data || {}
      setError('')
      dispatch(setLogin({ currentUser: user }))
      return
    } catch (err) {
      setError('Email or password is invalid.')
      backgroundLog(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        {error && <div>{error}</div>}
        <div>Email</div>
        <input onChange={(e) => setEmail(e.target.value)} />
        <div>Password</div>
        <input onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} type="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
