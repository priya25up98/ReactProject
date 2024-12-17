import express from 'express';
import { addUser, deleteUser, getUser, getUsers, register, updateUser } from '../controllers/user.controller';






const router = express.Router()
router.post('/register', register)
router.post('/add-user', addUser)
router.get('/get-users', getUsers)
router.get('/get-user/:user_id', getUser)
router.put('/update-users/:user_id', updateUser)
router.delete('/delete-user/:user_id', deleteUser)



export default router;