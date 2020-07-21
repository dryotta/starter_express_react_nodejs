const path = require('path')
const express = require('express')
const usersRoutes = require('./routes/users.routes')

const app = express()

app.use('/', usersRoutes)

const CURRENT_WORKING_DIR = process.cwd()
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(CURRENT_WORKING_DIR, 'build', 'index.html'));
});

let port = process.env.PORT || 4000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})
