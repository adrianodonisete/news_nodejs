module.exports.noticias = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((error, result) => {
        if (error) {
            res.render('error/error_conn', {error_conn: error});
        } else {
            res.render('noticias/noticias', {noticias: result});
        }
    });
};

module.exports.noticia = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);
    const id_noticia = req.query.id_noticia;

    noticiasModel.getNoticia(id_noticia, (error, result) => {
        if (error) {
            res.render('error/error_conn', {error_conn: error});
        } else {
            res.render('noticias/noticia', {noticia: result});
        }
    });
};