const { User } = require('../models')
const { hash , compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {
  static add(req, res) {
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || 'User'
    }
    User
      .create(newUser)
      .then(userCreate => {
        res.status(201).json({
          userCreate,
          message: `Success Create User`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    let check = {
      where: {
        email: req.body.email
      }
    }
    User
      .findOne(check)
      .then(userLogin => {
        if(userLogin) {
          if(compare(req.body.password, userLogin.password)) {
            let payload = {
              id: userLogin.id,
              email: userLogin.email,
              role: userLogin.role
            }
            let token = sign(payload)
            res.status(200).json({
              access_token: token,
              role: userLogin.role
            })
          } else {
            res.status(404).json({
              message: `Invalid Email/ Password`
            })
          }
        } else {
          res.status(404).json({
            message: `Invalid Email/ Password`
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newData = {      
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(newData)
      .then(person => {
        res.status(201).json({
          person,
          message: `Create Success`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAll(req, res) {
    User
      .findAll({})
      .then(allData => {
        res.status(200).json(allData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  
  static findOne(req, res) {
    let id = {
      where: {
        id: req.params.id
      }
    }
    User
      .findOne(id)
      .then(getData => {
        res.status(200).json(getData)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    let updated = {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
    let id = {
      where: {
        id: req.params.id
      }
    }
    User
      .findOne(id)
      .then(user => {
        if(!user) {
          res.status(404).json({
            message: `User Not Found`
          })
        } else {
          return User.update(updated, id)
        }
      })
      .then(updateUser => {
        res.status(200).json({
          updateUser,
          message: `Success updated`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    let id = {
      where: {
        id: req.params.id
      }
    }
    User
      .destroy(id)
      .then(deleteUser => {
        res.status(200).json({
          deleteUser,
          message: `Success deleted`
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController