import { Formik } from 'formik'

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { initialValues, validationSchema } from './formValues'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingBottom: theme.spacing(4),
  },

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },

  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  },

  formControl:{
    marginBottom: theme.spacing(1),
  },

  boxButton: {
    marginBottom: theme.spacing(2),
  },

  button: {
    marginBottom: theme.spacing(1),
  }

}))

const Signup = () => {

  const classes = useStyles()

  return (
    <TemplateDefault>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Crie sua conta
        </Typography>

        <Typography component='h2' variant='subtitle1' align='center' color='textPrimary'>
            E anuncie para todo o Brasil
        </Typography>
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

                    <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
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

                    <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}             
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}         
                      </FormHelperText>

                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Senha</InputLabel>
                      <Input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}            
                      />
                      <FormHelperText>
                        {errors.password && touched.password ? errors.password : null}         
                      </FormHelperText>

                    </FormControl>

                    <FormControl fullWidth error={errors.confirmPassword && touched.confirmPassword} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Confirmação de senha</InputLabel>
                      <Input
                        type='password'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}            
                      />
                      <FormHelperText>
                        {errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}         
                      </FormHelperText>

                    </FormControl>

                    <br /><br />

                    <Box textAlign='left' className={classes.boxButton}>
                      <Button type='submit' variant='contained' color='primary' fullWidth className={classes.button}>
                        Cadastrar
                      </Button>
                    
                      <br />

                      <Typography component='a' variant='body2' textAlign='left' color='textPrimary'>
                          Já tem uma conta? Clique aqui 
                      </Typography>
                    </Box>

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

export default Signup