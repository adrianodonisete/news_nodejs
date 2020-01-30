module.exports = app => {
    const { check, validationResult } = require('express-validator');
    
    app.get('/form_add_noticia', (req, res) => {
        res.render('admin/form_add_noticia', {arrErrors: [], noticia: {}});
    });

    app.post('/noticias/salvar', [
        check('titulo').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('resumo').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('autor').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('data_noticia').notEmpty().withMessage('Preencha a data'),
        check('noticia').isLength({ min: 12 }).withMessage('Mínimo 12 caracteres'),
      ], (req, res) => {
        let noticia = req.body;   

        const errors = validationResult(req);
        if (!errors.isEmpty()) {            
            res.render('admin/form_add_noticia', {arrErrors: errors.errors, noticia: noticia});
            return;
            // return res.status(422).json({ errors: errors.array() });
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
    });
}