import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'o campo "nome" é obrigatório']
  },
  
  email:{
    type: String,
    required: [true, 'o campo "E-mail" é obrigatório']
  },

  password:{
    type: String,
    required: [true, 'o campo "senha" é obrigatório']
  },
})

export default mongoose.model.users || mongoose.model('users', schema)