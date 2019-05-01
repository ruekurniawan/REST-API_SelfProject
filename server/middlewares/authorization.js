module.exports = {
  Authorize: function(req, res, next) {
    if(req.user.role === 'admin') {
      next()
    } else {
      res.status(400).json({
        message: `Unauthorize this page`
      })
    }
  }
}