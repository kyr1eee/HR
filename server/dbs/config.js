const mysql = require('mysql')

const config = mysql.createConnection({
  host: '47.106.247.211',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'HR',
  useConnectionPooling: true
})

module.exports = config
