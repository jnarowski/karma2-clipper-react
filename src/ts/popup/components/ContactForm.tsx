import React, { useState } from 'react'
import { Avatar, Input, Button, Col, Row } from 'antd'

const ContactForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialValues)

  const handleSubmit = (e) => {
    onSubmit({ form })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col flex="auto">
          <div style={{ marginBottom: 12 }}>
            <div>First Name</div>
            <Input value={form.first_name} />
          </div>
          <div style={{ marginBottom: 12 }}>
            <div>Last Name</div>
            <Input value={form.last_name} />
          </div>
          <Button type="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Col>
        <Col flex="75px">
          <Avatar size={64} src={form.avatarUrl} />
        </Col>
      </Row>
    </form>
  )
}

export default ContactForm
