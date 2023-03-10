import * as yup from 'yup'

const initialValues = {
 
  email: '',
  password: '',

}

const validationSchema = yup.object().shape({

  email: yup.string().email('Digite um E-mail válido').required(),

  password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo obrigatório'),

})

export {initialValues, validationSchema}