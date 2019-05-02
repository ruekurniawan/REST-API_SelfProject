const { verify } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = {
  Authenticate: function(req, res, next) {
    try {
      let token = req.headers.token
      if(token) {
        let decode = verify(token)
        req.authenticate = decode
        let check = {
          where: {
            id: req.authenticate.id
          }
        }
        User
          .findOne(check)
          .then(user => {
            if(user) {
              req.user = user,
              next()
            } else {
              res.status(500).json({
                message: `Invalid Token`
              })
            }
          })
      } else {
        res.status(404).json({
          message: `You Must be Login`
        })
      }
    } catch (error) {
      res.status(404).json({
        message: `You Must be Login`
      })
    }
  }
}