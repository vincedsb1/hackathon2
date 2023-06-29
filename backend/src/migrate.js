/* eslint-disable prettier/prettier */
//require('dotenv').config();
const fs = require("fs");
const mysql = require("mysql2/promise");
const path = './src/db.sql'

const migrate = async () => {
    //const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        multipleStatements: true,
    });

    await connection.query(`drop database if exists emmaus_connect`);
    await connection.query(`create database emmaus_connect`);
    await connection.query(`use emmaus_connect`);

    const sql = fs.readFileSync(path, 'utf8');

    await connection.query(sql);

    connection.end();
};

try {
    console.log('Migrating database...');
    migrate();

    console.log('Database migrated successfully!');
} catch (err) {
    console.error('Database migration failed!');
    console.error(err);
}
