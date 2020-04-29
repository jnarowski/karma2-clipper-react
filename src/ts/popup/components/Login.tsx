import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../services/authService'
import { Button, Input, Form } from 'antd'

const Login = ({ onLoginSuccess }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setSaving(true)
      const resp = await login({ email, password })
      const user = resp.data || {}

      setError('')
      onLoginSuccess({ user })
      setSaving(false)

      return
    } catch (err) {
      setError('Email or password is invalid.')
      setSaving(false)
      console.log(err)
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h4>karmaCRM Clipper</h4>
      <Form onSubmit={handleLogin} layout="vertical">
        {error && <div>{error}</div>}
        <Form.Item label="Email">
          <Input autoFocus onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Button onClick={handleLogin} type="primary" loading={saving}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
