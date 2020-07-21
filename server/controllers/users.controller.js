
const users = require('./users.json')

const list = async (req, res) => {
  res.json(users)
}

module.exports = {
  list
}
