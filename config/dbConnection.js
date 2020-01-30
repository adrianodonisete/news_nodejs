const mysql = require('mysql');

const connMysql = () => {
    console.log('conectado');
    return mysql.createConnection({
        host: 'localhost',
        user: 'developer',
        password: '1234567',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('autoload');
    return connMysql;
}