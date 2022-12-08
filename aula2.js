var http = require('http');
var dia = require('./bliblioteca');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'test/html'});
    res.write('<h2> Brasil 2 x 1 Suíca </h2> <br>');
    res.write('<p style=color:green>'+Date().substring(16,24)+'<br>');
    res.write(dia.diaDaSemana()+'</p><br>')
    res.end('Teste');

}).listen(8080);
