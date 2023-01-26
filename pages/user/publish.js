import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { 
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'


import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

  container: {
    padding: theme.spacing(8, 0, 6)
  },

  boxContainer: {
    paddingBottom: theme.spacing(3),
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },

  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
    flexWrap: 'wrap',
  },

  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
  },

  thumb: {
    width: 200,
    height: 150,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    margin: '0 15px 15px 0',

    '& $mainImage' : {
      backgroundColor: 'blue',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex'
    },

    '& $mask': {
      display: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  }

}))

const Publish = () => {
  const classes = useStyles()

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*', 
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, { //cria novo objeto do zero
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles
      ])
    },
    noClick: true
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName )
    setFiles(newFileState)
  }

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
          <Box className={classes.thumbsContainer} {...getRootProps()}>
            
            <Box className={classes.dropzone} onClick={open}>
              <input {...getInputProps()} />
              <Typography variant='body2' color='textPrimary' gutterBottom>
                Clique para adicionar ou arraste a imagem aqui...
              </Typography>
            </Box>

            {
              files.map((file, index) => (
                <Box
                  key={file.name}
                  className={classes.thumb}
                  style={{backgroundImage: `url(${file.preview})`}}
                >
                  {
                    index === 0 ?
                      <Box className={classes.mainImage}>
                        <Typography variant='body' color='secondary'>
                          Principal
                        </Typography>
                      </Box>
                      : null

                  }
                  
                  <Box className={classes.mask}>
                    <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
                      <DeleteForever fontSize='large' />
                    </IconButton>
                  </Box>
    
                </Box>

              ))
            }

          </Box>

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
          <Typography component='h6' variant='h6' coloer='textPrimary'>
            Preço
          </Typography>
          <br />
          <FormControl fullWidth variant='outlined' >
            <InputLabel>Valor</InputLabel>
            <OutlinedInput
              onChange={() => {}}
              startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              labelWidth={40} 
            />
          </FormControl>
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