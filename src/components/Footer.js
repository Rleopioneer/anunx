import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core"

import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
    }
  },
  link:{
    textDecoration: 'none'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return(

    <Container maxWidth='lg' component='footer' className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href='#' passHref className={classes.link}>
              <Typography color='textSecondary' variant='subtitle2'>
                Ajuda e contato
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href='#' passHref className={classes.link}>
              <Typography color='textSecondary' variant='subtitle2'>
                Dicas de segurança
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href='#' passHref className={classes.link}>
              <Typography color='textSecondary' variant='subtitle2'>
                Anunciar e vender
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href='#' passHref className={classes.link}>
              <Typography color='textSecondary' variant='subtitle2'>
                Trabalhe conosco
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer