module.exports.home = (app, req, res) => {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias((error, result) => {        
        if (error) {
            res.render('error/error_conn', {error_conn: error});
        } else {
            res.render('home/index', { noticias : result });
        }
    });
};