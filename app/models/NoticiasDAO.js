class NoticiasDAO {

    constructor(connection) {
        this._connection = connection;
    }

    getNoticias = (callback) => {
        
        let sql = `
            SELECT * 
            FROM noticias`;

        this._connection.query(sql, callback);
    } 

    getNoticia = (callback) => {
        
        let sql = `
            SELECT * 
            FROM noticias
            WHERE id_noticia = 2`;

        this._connection.query(sql, callback);
    }

    salvarNoticia = (noticia, callback) => {
        console.log(noticia);
        
        let sql = `
            INSERT INTO noticias 
            SET ? `;

        this._connection.query(sql, noticia, callback);
    }
}

module.exports = () => {    
    return NoticiasDAO;
};