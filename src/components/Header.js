import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'
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
  headButton: {
    marginRight: 10
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

  const [ session ] = useSession()

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  AnunX
              </Typography>
              <Link href={ session ?  '/user/publish' : '/auth/signin' } className={classes.link}>
                <Button color="secondary" variant='outlined' className={classes.headButton}>Anunciar e Vender</Button>
              </Link>
              {
                session 
                  ? (
                    <IconButton color='secondary' onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                      {
                        session.user.image 
                          ? <Avatar src={session.user.image} /> : <AccountCircle />
                      }
                      <Typography variant='subtitle2' color='secondary' className={classes.userName}>{session.user.name}</Typography>
                    </IconButton>

                  ) : null
              }
              

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
                <MenuItem onClick={() => signOut({callbackUrl: 'http://localhost:3000/'})}>Sair</MenuItem>
              </Menu>
            </Toolbar>
        </Container>
        
      </AppBar>
    </>
  )
}
