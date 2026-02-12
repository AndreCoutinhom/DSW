// EXERCÍCIOS EM AULA

import express from 'express';

const api = express();

// Nessa parte criamos um endpoint que retorna 'hello world!' quando o protocolo solicitar-lhe um GET:

api.get('/hello', (req, resp) => {
    resp.send('hello world!');
})

// Aqui atribuímos um valor do retorno do endpoint a uma variável. Nesse caso, é o nosso nome.
// Definimos, primeiramente, o nome do parâmetro depois de '/:'. Com o mesmo nome do parâmetro damos o nome da variável e fazemos com que seja atribuída aos parâmetros de requisição.
// Nos parâmetros de resposta, atribuímos a variável dentro de uma string. Quando rodar no Postman com verbo GET, a string será apresentada no console.

api.get('/suave/:nome', (req, resp) => {
    let nome = req.params.nome;
    resp.send('Suave ' + nome + '?');
})

// Parâmetros de query não são declarados como os de rota que foram atribuídos nas linhas acima.
// Ao invés disso, o valor da query é determinado pelo endpoint, e a variável retorna sua função como query.

api.get('/tranquilo', (req, resp) => {
    let nome = req.query.nome; // Aqui a variável recebe a função de query.
    resp.send('Tranquilo ' + nome + '?') // Para fazer essa string aparecer, o verbo GET tem que ser acionado pelo endpoint: 'http://localhost:5010/tranquilo?nome=SeuNome'. 
                                        // Repare que o '?' é o que inicia a declaração de query.
})

// No exemplo abaixo usamos uma operação matemática para encontrar o dobro de um número.
// É uma query, então a rota não é definida. Duas variáveis para fazer o cálculo, e o número que será dobrado é inserido no endpoint: 'http://localhost:5010/dobro?numero=4'.

api.get('/dobro', (req, resp) => {
    let numero = Number(req.query.numero); // LEMBRETE: Se o valor é número, precisa ser declarado como 'Number'.
    let dobro = numero * 2;
    resp.send('O dobro de ' + numero + ' é ' + dobro);
})

// Agora duas queries em um endpoint. Ambas são variáveis posicionadas como queries. A diferença é que ambas serão chamadas no endpoint separadas por '&', como em:
// http://localhost:5010/somar?numero1=4&numero2=2

api.get('/somar', (req, resp) => {
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    let soma = numero1 + numero2;
    resp.send(numero1 + ' + ' + numero2 + ' = ' + soma);
})

// Agora um cálculo mais complexo usando condições 'if' para vários parâmetros. Dessa vez está em forma de rota, então as variáveis são declaradas na criação do endpoint.

api.get('/media/:nota1/:nota2/:nota3', (req, resp) => {
    let nota1 = Number(req.params.nota1);
    let nota2 = Number(req.params.nota2);
    let nota3 = Number(req.params.nota3);
    let media = (nota1 + nota2 + nota3)/3;
    let mediaFormatada = media.toFixed(2); // Um capricho para fazer apenas duas casas decimais em caso de número quebrado.

    if (media >= 6) {
        resp.send('Sua média final é ' + mediaFormatada + '. Parabéns! Passou dessa vez.');
    } else {
        resp.send('Sua média final é ' + mediaFormatada + '. Você está de recuperação!');
    }

})

// Sempre que rodar a API com o comando `node api.js`, o console confirma que a API foi lançada.

api.listen(5010, () => console.log('API subiu!'));
