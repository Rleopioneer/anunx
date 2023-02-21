import { Formik } from 'formik'

import { 
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import FileUpload from '../../../src/components/FileUpload'
import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'

const Publish = () => {
  const classes = useStyles()

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
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok', values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {

            return(

              <form onSubmit={handleSubmit}>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    
                    <FormControl fullWidth error={errors.title && touched.title}>
                      <InputLabel className={classes.inputLabel}>Título do Anúncio</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.title && touched.title ? errors.title : null}                        
                      </FormHelperText>

                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.category && touched.category}>
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
                        {errors.category && touched.category ? errors.category : null}    
                      </FormHelperText>

                    </FormControl>

                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FileUpload
                      files={values.files}
                      errors={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                    />
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>

                    <FormControl fullWidth error={errors.description && touched.description}>
                      <InputLabel className={classes.inputLabel}>Escreva os detalhes do que está vendendo</InputLabel>
                      <Input
                        onChange={handleChange}
                        name='description'
                        multiline
                        rows={6}
                        variant='outlined' 
                      />
                      <FormHelperText>
                        {errors.description && touched.description ? errors.description : null}
                      </FormHelperText>

                    </FormControl>

                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    
                    <FormControl fullWidth error={errors.price && touched.price} >
                    <InputLabel className={classes.inputLabel}>Preço</InputLabel>
                      <Input
                        name='price'
                        variant='outlined'
                        onChange={handleChange}
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>} 
                      />
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md' className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary' gutterBottom>
                        Dados de contato
                    </Typography>

                    <FormControl fullWidth error={errors.name && touched.name}>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}                        
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.email && touched.email}>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}                        
                      </FormHelperText>
                    </FormControl>

                    <br /><br />

                    <FormControl fullWidth error={errors.phone && touched.phone}>
                      <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}                
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}                        
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

Publish.requireAuth = true

export default Publish