import express from 'express'
const router = express.Router()
import { registerUser,getUser } from './controllers/userController.mjs'
router.get('/', (req, res) => {
  res.send('Hello World!')
})
router.post('/register', registerUser);
router.get('/user/:id', getUser);
export default router