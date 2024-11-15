import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}  
    >
      <Drawer
        variant="permanent" // temporary si quiero ocultar de manera condicional
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component='div'>
            Francisco Pereira
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem  key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'lorem ipsum fdsfdsfdsfsdfsdfdsfsdfsd'}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>


      </Drawer>
    </Box>
  )
}
