import React from 'react'
import { Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Container style={{ margin: '150px 150px', paddingLeft: '90px' }}>
      This page does not exist. Go back
      <Link to='./'>
        <Button>Home</Button>
      </Link>
    </Container>
  )
}

export default Error
