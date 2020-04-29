import { postAccountSignin } from './apiService'

export const isAuthenticated = () => {
  const token = localStorage.getItem('apiToken') || ''
  return token && token.length > 0
}

export const getApiToken = () => {
  return getCurrentUser().api_token
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user')) || {}
}

export const login = async ({ email, password }) => {
  const resp = await postAccountSignin({ email, password })
  const user = resp.data || {}

  localStorage.setItem('apiToken', user.api_token)
  localStorage.setItem('user', JSON.stringify(user))

  return resp
}

export const logout = () => {
  localStorage.removeItem('user')
}
