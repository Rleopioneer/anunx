import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import { useDropzone } from 'react-dropzone'
import { 
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'


import { DeleteForever, ErrorSharp } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

  boxContainer: {
    paddingBottom: theme.spacing(3),
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },

  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
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

const validationSchema = yup.object().shape({

  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),

  category: yup.string().required('Campo obrigatório'),

  description: yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
    .required('Campo obrigatório'),

  price: yup.number().required('Campo obrigatório'),

  email: yup.string().email('Digite um E-mail válido').required(),

  name: yup.string().required('Campo obrigatório'),

  phone: yup.number().required('Campo obrigatório')

})

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

      <Container maxWidth='sm' >
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
          Publicar Anúncio
        </Typography>
        <Typography component='h2' variant='h5' align='center' color='textPrimary' gutterBottom>
          Quanto mais detalhado, melhor!
        </Typography>
        <br/>
      </Container>

      <Formik
        initialValues={{
          title: '',
          category:'',
          description:'',
          price:'',
          email:'',
          name:'',
          phone:'',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok', values)
        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,
          }) => {

            console.log(values)
            

            return(

              <form onSubmit={handleSubmit}>
                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    
                    <FormControl fullWidth error={errors.title}>
                      <InputLabel className={classes.inputLabel}>Título do Anúncio</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.title}                        
                      </FormHelperText>

                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.category}>
                      <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
                      <Select 
                        name='category'
                        value={values.category}
                        onChange={handleChange}
                        fullWidth
                      >

                        <MenuItem value=''>Selecione</MenuItem>
                        <MenuItem value='Bebê e Criança'>Bebê e Criança</MenuItem>
                        <MenuItem value='Agricultura'>Agricultura</MenuItem>
                        <MenuItem value='Moda'>Moda</MenuItem>
                        <MenuItem value='Carros, Motos e Barcos'>Carros, Motos e Barcos</MenuItem>
                        <MenuItem value='Serviços'>Serviços</MenuItem>
                        <MenuItem value='Lazer'>Lazer</MenuItem>
                        <MenuItem value='Animais'>Animais</MenuItem>
                        <MenuItem value='Moveis, Casa e Jardim'>Moveis, Casa e Jardim</MenuItem>
                        <MenuItem value='Imóveis'>Imóveis</MenuItem>
                        <MenuItem value='Tecnologia'>Tecnologia</MenuItem>
                        <MenuItem value='Emprego'>Emprego</MenuItem>
                        <MenuItem value='Outros'>Outros</MenuItem>
                      
                      </Select>

                      <FormHelperText>
                        {errors.category}
                      </FormHelperText>

                    </FormControl>

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

                    <FormControl fullWidth error={errors.description}>
                      <InputLabel className={classes.inputLabel}>Escreva os detalhes do que está vendendo</InputLabel>
                      <Input
                        onChange={handleChange}
                        name='description'
                        multiline
                        rows={6}
                        variant='outlined' 
                      />
                      <FormHelperText>
                        {errors.description}
                      </FormHelperText>

                    </FormControl>

                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    
                    <FormControl fullWidth error={errors.price} >
                    <InputLabel className={classes.inputLabel}>Preço</InputLabel>
                      <Input
                        name='price'
                        variant='outlined'
                        onChange={handleChange}
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>} 
                      />
                      <FormHelperText>
                        {errors.price}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                        Dados de contato
                    </Typography>

                    <FormControl fullWidth error={errors.name}>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.name}                        
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.email}>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.email}                        
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.phone}>
                      <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.phone}                        
                      </FormHelperText>
                    </FormControl>
                    
                  </Box>
                </Container>

                <Container  maxWidth='md' className={classes.boxContainer}>
                  <Box textAlign='right'>
                    <Button type='submit' variant='contained' color='primary'>
                      Publicar Anúncio
                    </Button>
                  </Box>

                </Container>
              </form>

            )
          }
        }

      </Formik>

    </TemplateDefault>
    
  )
	
}

export default Publish