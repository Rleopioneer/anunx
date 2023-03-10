import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'

import Card from '../src/components/Card'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  
  searchBox: {
    display: 'flex',
    justifyContent: 'center', 
    padding: theme.spacing(0, 2),
    margin: '40px 0',
  },
  cardGrid: {
    marginTop: 50,
  }

}))

const Home = () => {

  const classes = useStyles()
  
return(

  <TemplateDefault>

      <Container maxWidth='md'>
          <Typography component='h1' variant='h3' align='center' color='textPrimary'>
              O que deseja encontrar?
          </Typography>
          <Paper className={classes.searchBox}>
              <InputBase placeholder='Ex.: Playstation 5 Digital Edition'  fullWidth/>
              <IconButton>
                  <SearchIcon />
              </IconButton>
          </Paper>
      </Container>

      <Container maxWidth='md'>
          <Typography component='h2' variant='h4' align='center' color='textPrimary'>
              Destaques
          </Typography>
          <br />
      </Container>

      <Container maxWidth='lg' className={classes.cardGrid}>

          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>


          </Grid>

      </Container>

  </TemplateDefault>

)
}

export default Home