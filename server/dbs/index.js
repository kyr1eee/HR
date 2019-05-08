const mysql = require('mysql')
const setting = require('./setting.js')

const connection = mysql.createConnection({
  host: setting.host,
  port: setting.port,
  user: setting.username,
  password: setting.password,
  database: setting.name,
  // useConnectionPooling: setting.useConnectionPooling
})

module.exports = connection
