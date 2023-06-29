const mysql = require('mysql2/promise');
const config = require('config');

const DB_HOST = 'localhost';
const DB_PORT = '3306';
const DB_NAME = 'emmaus_connect';
const DB_USERNAME = 'root';
const DB_USERNAME_PASSWORD = 'password';

const connectionOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD,
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!', err);

        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;
