import React from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useTheme,
} from '@mui/material'

interface SidebarProps {
  isOpen: boolean
  onToggleSidebar: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isOpen}
      onClose={onToggleSidebar}
      color="primary"
      PaperProps={{
        elevation: 0,
        sx: {
          borderRight: 0,
          width: isOpen ? 240 : 80,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem>
          <ListItemText primary="Links" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
