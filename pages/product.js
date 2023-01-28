import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom:theme.spacing(3),
  },

  productName: {
    margin: '15px 0 ',
  },

  price: {
    fontWeight: 'bold',
    marginBottom: 15,
  }
}))

const Product = () => {

  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
              Carrossel
            </Box>

            <Box className={classes.box}>
                <Typography component='span' variant='caption'>Publicar</Typography>
                <Typography component='h4' variant='h4' className={classes.productName}>Playstation 5</Typography>
                <Typography component='h4' variant='h4' className={classes.price}>R$ 4300,00</Typography>
                <Chip label='categoria' />
              </Box>

              <Box className={classes.box}>
                <Typography component='h6' variant='h6'>Descrição</Typography>
                <Typography component='p' variant='body2'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                
              </Box>

          </Grid>

          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader
                avatar={
                  <Avatar>R</Avatar>
                }
                title='Ramon Leonardo'
                subheader='ramon.c.leo@hotmail.com'
               />
               <CardMedia
                image='https://source.unsplash.com/random'
                title='Ramon Leonardo'
              />
            </Card>

            <Box className={classes.box}>
                <Typography component='h6' variant='h6'>Localização</Typography>                
              </Box>

            
            
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>


  )

}

export default Product