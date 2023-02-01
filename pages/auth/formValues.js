import * as yup from 'yup'

const initialValues = {
 
  name: '',
  email: '',
  password: '',
  confirmPassword: '',

}

const validationSchema = yup.object().shape({

  name: yup.string().required('Campo obrigatório'),

  email: yup.string().email('Digite um E-mail válido').required(),

  password: yup.string().min(6, 'Mínimo de 6 caracteres').required('Campo obrigatório'),

  confirmPassword: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),

})

export {initialValues, validationSchema}