module.exports.form_add_noticia = (app, req, res) => {
    res.render('admin/form_add_noticia', {arrErrors: [], noticia: {}});
};

module.exports.noticias_salvar = (app, req, res, errors) => {
    let noticia = req.body; 
    
    if (!errors.isEmpty()) {            
        res.render('admin/form_add_noticia', {arrErrors: errors.errors, noticia: noticia});
        return;
    }

    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, (error, result) => {
        if (error) {
            res.render('error/error_conn', {error: error});
        } else {                
            res.redirect('/noticias');
        }
    });
};