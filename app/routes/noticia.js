module.exports = app => {
    
    app.get('/noticia', (req, res) => {

        const connection = app.config.dbConnection();
        const noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia((error, result) => {
            if (error) {
                res.render('error/error_conn', {error_conn: error});
            } else {
                res.render('noticias/noticia', {noticia: result});
            }
        });

        
    });
};