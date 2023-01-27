import React, { useState } from 'react'
import Link from 'next/link'

import { 
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  makeStyles,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core'

import { 
  AccountCircle,
  MenuIcon
 } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none'
  },
  userName : {
    marginLeft: 10
  },
  divider:{
    margin: '8px 0'
  },
  menuItem: {
    color: '#000000'
  }
}))

export default function Header() {
  const classes = useStyles()

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  AnunX
              </Typography>
              <Link href='/user/publish' className={classes.link}>
                <Button color="secondary" variant='outlined'>Anunciar e Vender</Button>
              </Link>
              <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                {
                  true === false ? <Avatar src='' /> : <AccountCircle />
                }
                <Typography variant='subtitle2' color='secondary' className={classes.userName}>Ramon C. Leonardo</Typography>
              </IconButton>

              <Menu
                anchorEl={anchorUserMenu}
                open={openUserMenu}
                onClose={() => setAnchorUserMenu(null)}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left'
                }}
              >
                <Link href='/user/dashboard' className={classes.link}>
                  <MenuItem color='primary' className={classes.menuItem} >Meus Anúncios</MenuItem>
                </Link>
                <Link href='/user/publish' className={classes.link}>
                  <MenuItem color='primary' className={classes.menuItem}>Publicar novo anúncio</MenuItem>
                </Link>
                <Divider className={classes.divider} />
                <MenuItem>Sair</MenuItem>
              </Menu>
            </Toolbar>
        </Container>
        
      </AppBar>
    </>
  )
}
