var fs = require('fs');

fs.appendFile('novoArquivo.txt', 'Arquivo criada com sucesso!', function (err) {
    if (err) throw err;
    console.log('Arquivo Criado...');
});