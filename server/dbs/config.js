const mysql = require('mysql')

const config = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'stuer'
})

module.exports = config
