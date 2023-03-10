import { Formik } from 'formik'
import Image from 'next/image'

import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core'

import { initialValues, validationSchema } from './formValues'
import TemplateDefault from '../../../src/templates/Default'

import useToasty from '../../../src/contexts/Toasty'
import useStyles from './styles'
import { Alert } from '@material-ui/lab'


const Signin = ({ APP_URL }) => {

  const classes = useStyles()
  const router = useRouter()
  const { setToasty } = useToasty()
  const [ session ] = useSession()

  console.log(session)
  
  const handleFormSubmit = async values => { 
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `${APP_URL}/user/dashboard`
    })
   }

   const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `${APP_URL}/user/dashboard`
    })
   }

  return (
    <TemplateDefault>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary'>
            Entre na sua conta!
        </Typography>
      </Container>

      <Container maxWidth='md' className={classes.boxContainer}>
        <Box className={classes.box}>
          <Box display='flex' justifyContent='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={handleGoogleLogin}
              startIcon={
                <Image
                  src='/images/logo_google.svg'
                  width={20}
                  height={20}
                  alt='Login do Google'
                />
              }
            >Entrar com Google</Button>
          </Box>

          <Box className={classes.orSeparator}>
            <span>ou</span>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {
              ({
                touched,
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => {

                return(
                  <form onSubmit={handleSubmit}>
                    {
                      router.query.i === '1'
                        ? (
                          <Alert severity='error' className={classes.errorMessage}>Usu??rio ou senha inv??lidos</Alert>
                        )
                        : null
                    }


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

                        <br /><br />

                        <Box textAlign='left' className={classes.boxButton}>
                          {
                            isSubmitting 
                              ? (
                                <CircularProgress className={classes.loading} />
                              ) : (
                                <Button
                                  type='submit'
                                  variant='contained'
                                  color='primary'
                                  fullWidth
                                  className={classes.button}>
                                    Entrar
                                </Button>
                              )
                          }

                        </Box>
                  </form>
                )
                
              }
              
            }

          </Formik>
        </Box>
      </Container>

    </TemplateDefault>
  )
}

Signin.getInitialProps = async function() {
  return {
    APP_URL: process.env.APP_URL
  }
}

export default Signin