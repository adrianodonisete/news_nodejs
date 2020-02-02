module.exports = app => {
    const { check, validationResult } = require('express-validator');
    
    app.get('/form_add_noticia', (req, res) => {
        app.app.controllers.admin.form_add_noticia(app, req, res);
    });

    app.post('/noticias/salvar', [
        check('titulo').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('resumo').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('autor').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
        check('data_noticia').notEmpty().withMessage('Preencha a data'),
        check('noticia').isLength({ min: 12 }).withMessage('Mínimo 12 caracteres'),
      ], (req, res) => { 
        app.app.controllers.admin.noticias_salvar(app, req, res, validationResult(req));
    });
}