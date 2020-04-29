import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Login from './Login'
import Authenticated from './Authenticated'
import * as authService from 'services/authService'
import { createContact } from 'services/apiService'

type Props = {}

const PopupApp = (props: Props) => {
  const [user, setUser] = useState(authService.getCurrentUser())
  const isAuthenticated = user && user.id
  const record = useSelector((state) => state.settings.record)
  const form = useSelector((state) => state.settings.form)

  const handleContactCreate = async ({ form }) => {
    createContact(form)
  }

  const handleLoginSuccess = async ({ user }) => {
    setUser(user)
  }

  const handleLogout = async () => {
    setUser({})
    await authService.logout()
  }

  const renderLayout = () => {
    if (isAuthenticated) {
      return (
        <Authenticated
          currentUser={user}
          form={form}
          onContactCreate={handleContactCreate}
          onLogout={handleLogout}
          record={record}
        />
      )
    }

    return <Login onLoginSuccess={handleLoginSuccess} />
  }

  return <div style={{ width: 300 }}>{renderLayout()}</div>
}

export default PopupApp
