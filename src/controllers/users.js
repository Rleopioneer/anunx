import USersModel from '../models/users'
import dbConnect from '../utils/dbConnect'
import { crypto } from '../utils/password'

const get = async (req, res) => {
  await dbConnect()
  const users = await USersModel.find()
  res.status(200).json({ success: true, users })
}

const post = async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body
  
  await dbConnect()

  const passwordCrypto = await crypto(password)

  const user = new USersModel({
    name,
    email,
    password: passwordCrypto
  })

  user.save()

  res.status(201).json({ success: true })
}

export {
  get,
  post
}