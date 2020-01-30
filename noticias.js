const http = require('http');

let server = http.createServer((req, res) => {

    let categoria = req.url;
    if (categoria == '/tecnologia') {
        res.end('<b>Portal de not&iacute;cias - tecnologia x</b>');
    } else if (categoria == '/moda') {
        res.end('<b>Portal de not&iacute;cias - moda x</b>');
    } else {
        res.end('<b>Portal de '+categoria+'</b>');
    }
});

server.listen(3000);

// console.log('Criando um site de noticias com NodeJS');