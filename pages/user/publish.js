import { 
  Box,
  Button,
  Container,
  makeStyles,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6)
  },

  boxContainer: {
    paddingBottom: theme.spacing(3),
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  }

}))

const Publish = () => {
  const classes = useStyles()

  return (
    
    <TemplateDefault>

      <Container maxWidth='sm' className={classes.container}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          Publicar Anúncio
        </Typography>
        <Typography component='h2' variant='h5' align='center' color='textPrimary' gutterBottom>
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
            Título do anúncio
          </Typography>
          <TextField
            label='ex.: Bicicleta aro 18 com garantia'
            size='small'
            fullWidth
          />

          <br /><br />

          <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
            Categoria
          </Typography>
          <Select 
            native
            value=''
            fullWidth
            onChange={() => {}}
            inputProps={{
              name: 'age',
            }}
          >

            <option value=''>Selecione</option>
            <option value={1}>Selecione</option>
            <option value={2}>Bebê e Criança</option>
            <option value={3}>Agricultura</option>
            <option value={4}>Moda</option>
            <option value={5}>Carros, Motos e Barcos</option>
            <option value={6}>Serviços</option>
            <option value={7}>Lazer</option>
            <option value={8}>Animais</option>
            <option value={9}>Moveis, Casa e Jardim</option>
            <option value={10}>Imóveis</option>
          
          </Select>
        </Box>
      </Container>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
              Imagens
          </Typography>
          <Typography component='div' variant='body2' color='textPrimary' gutterBottom>
              A primeira imagem é a foto principal do seu anúncio
          </Typography>
        </Box>
      </Container>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
              Descrição
          </Typography>
          <Typography component='div' variant='body2' color='textPrimary' gutterBottom>
              Escreva os detalhes do que está vendendo
          </Typography>

          <TextField
            multiline
            rows={6}
            variant='outlined'
            fullWidth            
          />
        </Box>
      </Container>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
              Dados de contato
          </Typography>

          <TextField
            label='Nome'
            size='small'
            variant='outlined'
            fullWidth            
          />
          <br /><br />
          <TextField
            label='E-mail'
            size='small'
            variant='outlined'
            fullWidth            
          />
          <br /><br />
          <TextField
            label='Telefone'
            size='small'
            variant='outlined'
            fullWidth            
          />
        </Box>
      </Container>

      <Container  maxWidth='md' className={classes.boxContainer}>
        <Box textAlign='right'>
          <Button variant='contained' color='primary'>
            Publicar Anúncio
          </Button>
        </Box>

      </Container>


    </TemplateDefault>
    
  )
	
}

export default Publish