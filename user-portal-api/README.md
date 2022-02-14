# User Portal API
The User Portal API is a REST API built with [Express](https://expressjs.com/), [Typescript](https://www.typescriptlang.org/), and [TypeORM](https://typeorm.io/). It allows clients to retrieve data from the User Portal database without making a direct connection.

## Prerequisites
### MySQL
The User Portal API uses a MySQL database. Specifically, it was developed using a locally-running MySQL 8.0.22 server.

#### Installation
Install mysql via Homebrew
```
brew install mysql
```

Assure that you can run the server and login with:
```
mysql.server start
mysql -uroot
```

#### Setup
Create a user on the MySQL server and grant it privileges. For ease of development of this proof of concept, the user was given all privileges. This is potentially dangeros and should not be done in production.
```
CREATE USER 'test'@'localhost' IDENTIFIED BY 'test';
GRANT ALL PRIVILEGES ON *.* TO 'test'@'localhost';
```

Once the user is created, create the database itself with:
```
CREATE DATABASE user_portal;
```

### Node
This application was developed using Node.js v14.15 (the latest LTS version at time of writing).

#### Installation
If not already installed, get [NVM](https://github.com/nvm-sh/nvm) to manage node installations.

Install Node.js with:
```
nvm install 14.15
```

## Running
### `npm start`
This command will make sure that the database is in sync with the application's Entity classes, run database migrations (if necessary), and start the API.

### `npm test`
This command will run all unit tests for the API.
