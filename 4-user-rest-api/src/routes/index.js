const {Router} = require('express')
const UserController = require('../controllers/UserController')

const routes = Router()

routes.post('/', UserController.CreateUser)
routes.get('/', UserController.QueryUser)
routes.get('/:id', UserController.GetUserById)
routes.delete('/:id', UserController.RemoveUser)


module.exports = routes