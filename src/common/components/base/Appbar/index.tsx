import React from 'react'
import { AppBar, AppBarProps, Toolbar } from '@mui/material'
import { Container } from '@mui/system'

const Appbar: React.FC<AppBarProps> = (props) => {
  return (
    <AppBar {...props}>
      <Container>
        <Toolbar />
      </Container>
    </AppBar>
  )
}

export default Appbar
