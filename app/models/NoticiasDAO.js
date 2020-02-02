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

    getNoticia = (id_noticia, callback) => {
        
        let sql = `
            SELECT * 
            FROM noticias
            WHERE id_noticia = ${id_noticia}`;

        this._connection.query(sql, callback);
    }

    salvarNoticia = (noticia, callback) => {
        
        let sql = `
            INSERT INTO noticias 
            SET ? `;

        this._connection.query(sql, noticia, callback);
    }

    get5UltimasNoticias = (callback) => {
        
        let sql = `
            SELECT * 
            FROM noticias 
            ORDER BY data_criacao DESC 
            LIMIT 5`;

        this._connection.query(sql, callback);
    }
}

module.exports = () => {    
    return NoticiasDAO;
};