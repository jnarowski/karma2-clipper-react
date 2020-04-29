import React from 'react'
import { Input } from 'antd'
import ContactForm from './ContactForm'

export default ({ onLogout, onContactCreate, currentUser, record, form }) => {
  const renderBody = () => {
    if (!record || (record && !record.id)) {
      return <ContactForm initialValues={form} onSubmit={onContactCreate} />
    }

    return (
      <div>
        <a
          target="_BLANK"
          href={'https://app.karamcrm.com/#/contacts/' + record.id}
        >
          {record.first_name} {record.last_name}
        </a>
      </div>
    )
  }

  return (
    <div>
      <div style={{ background: 'whiteSmoke', padding: 12 }}>
        <div style={{ float: 'right' }}>
          <a onClick={onLogout}>Logout</a>
        </div>
        <span>{currentUser.email}</span>
      </div>
      <div style={{ padding: 12 }}>{renderBody()}</div>
    </div>
  )
}
