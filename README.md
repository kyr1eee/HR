
# HR 招聘网站

> My exceptional Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# HR
企业招聘管理系统

#### 部署 MYSQL 于云服务器
#### 安装 MYSQL
1. sudo apt-get install mysql-client-core-5.7
2. sudo apt-get install mysql-client-5.7
3. sudo apt-get install mysql-server-5.7
4. 输入密码

#### 启动服务
1. service mysql start

#### 开启远程连接
1. 修改绑定地址：vi /etc/mysql/mysql.conf.d/mysqld.cnf,修改bind-address，将改行注释
2. 设置root权限： grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;
3. flush privileges;
4. 查看是否成功: mysql -u root -p -> use mysql -> select user, host from user; -> user: root, host: %

#### 错误分析
+ ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
1. 修改my.cnf: vi /etc/my.cnf 
2. 将mysql, client, mysqld等 socket = /tmp/mysql.sock 修改为 sock = /var/run/mysqld/mysqld.sock
