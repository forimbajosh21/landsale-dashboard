import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Box, BoxProps } from '@mui/material'
import { styled, Theme } from '@mui/material/styles'

import Sidebar from 'common/components/base/Sidebar'
import Appbar from 'common/components/base/Appbar'

interface ContentBoxProps extends BoxProps {
  theme?: Theme
  isOpen: boolean
}

const ContentBox = styled(Box, {
  shouldForwardProp: (prop) => !prop,
})<ContentBoxProps>(({ theme, isOpen }) => ({
  height: '100%',
  color: theme.palette.common.white,
  marginLeft: theme.spacing(10),
  paddingTop: theme.spacing(5),

  transition: theme.transitions.create('margin-left', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isOpen && {
    marginLeft: 240,
  }),
}))

const WithSidebarLayout: React.FC = () => {
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(true)

  const handleToggleSidebar = React.useCallback(() => {
    setOpenSidebar((prevState) => !prevState)
  }, [])

  return (
    <>
      <Sidebar isOpen={openSidebar} onToggleSidebar={handleToggleSidebar} />
      <Appbar elevation={0} position="relative" />

      <ContentBox isOpen={openSidebar}>
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Outlet />
        </Container>
      </ContentBox>
    </>
  )
}

export default WithSidebarLayout
