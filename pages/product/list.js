import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'

import Card from '../../src/components/Card'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  
  searchBox: {
    display: 'flex',
    justifyContent: 'center', 
    padding: theme.spacing(0, 2),
    margin: '10px 0',
  },

  cardGrid: {
    marginTop: 30,
  },

  searchCards: {
    padding: theme.spacing(1, 2, 3, 2),
  },
  cardText: {
    padding: theme.spacing(1, 0, 1, 0)
  }

}))

const List = () => {

  const classes = useStyles()

  return (
    <TemplateDefault>

      <Container maxWidth='md'>
        
        <Paper className={classes.searchBox}>
            <InputBase placeholder='Ex.: Playstation 5 Digital Edition'  fullWidth/>
            <IconButton type='submit' aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>

      </Container>

      <Container maxWidth='md' className={classes.cardGrid}>
          
        <Paper className={classes.searchCards} elevation={0}>

          <Box className={classes.cardText}>

            <Typography
              component='h6'
              variant='h6'
              color='textPrimary'
            >
              Anúncios
            </Typography>

            <Typography
              component='P'
              variant='caption'
              color='textPrimary'
              
            >
              ENCONTRADOS 200 ANÚNCIOS
            </Typography>

          </Box>
            

          <Grid container spacing={4}>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=1'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=2'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                image={'https://source.unsplash.com/random?a=3'}
                title='Produto X'
                subtitle='R$ 60,00'
              />
            </Grid>


          </Grid>

        </Paper>


      </Container>

  </TemplateDefault>
  )

}

export default List