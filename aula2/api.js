// ADOs em building

import express from 'express';

const api = express();

// Parâmetro de corpo não funciona sem a função abaixo
api.use(express.json());

// Atividade em aula 1

// Soma com método de Rotas
api.get('/calculadora/somar/:num1/:num2', (req, resp) => {
    let n1 = Number(req.params.num1);
    let n2 = Number(req.params.num2);

    let soma = n1 + n2;

    // A resposta aparece em formato de objeto JSON. Algo muito mais usual do que um valor em string.
    resp.send ({
        soma: soma
    });
})

// Subtração com método de Query
api.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);

    let subtracao = n1 - n2;

    // A resposta aparece em formato de objeto JSON. Algo muito mais usual do que um valor em string.
    resp.send({
        subtracao: subtracao
    })
})

// Atividade em aula 2

// Parâmetro de corpo não funciona com verbo GET. Precisamos usar outros verbos.
// Diferentemente dos parâmetros de query ou rotas, os parâmetros de corpo precisam usar saídas e entradas de dados pela interface da API (no nosso caso, o Postman).

api.post('/calculadora/multiplicar', (req, resp) => {
    let dados = req.body; // A variável assume o valor do corpo dos parâmetros adicionados no Postman.
    let multiplicacao = dados.n1 * dados.n2; // As operações acontecem pegando dados inseridos no corpo.


    /* É assim que os dados aparecem no corpo em formato JSON:

    {
    "n1": 10,
    "n2": 2
}   
    */

    // A resposta é enviada da mesma forma que os outros métodos anteriores.
    resp.send({
        multiplicacao: multiplicacao
    })
})

// ADO 1: Média das notas usando parâmetro de Rotas

api.get('/media1/:nota1/:nota2/:nota3', (req, resp) => {
    let nota1 = Number(req.params.nota1);
    let nota2 = Number(req.params.nota2);
    let nota3 = Number(req.params.nota3);

    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(2);

    let aprovacao = ('Parabéns! Com a nota ' + mediaFormatada + ' você passou de ano!');
    let reprovacao = ('Que pena. Com a nota ' + mediaFormatada + ' você reprovou.');

    if (media < 6) {
        resp.send({
            situacao: reprovacao
        })
    } else {
        resp.send({
            situacao: aprovacao
        })
    }
})


// ADO 2: Média das notas usando parâmetro de Query

api.get('/media2', (req, resp) => {
    let nota1 = Number(req.query.nota1);
    let nota2 = Number(req.query.nota2);
    let nota3 = Number(req.query.nota3);
    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(2);

    let aprovacao = ('Parabéns! Com a nota ' + mediaFormatada + ' você passou de ano!');
    let reprovacao = ('Que pena. Com a nota ' + mediaFormatada + ' você reprovou.');

    if (media < 6) {
        resp.send({
            situacao: reprovacao
        })
    } else {
        resp.send({
            situacao: aprovacao
        })
    }

})

// ADO 3: Média das notas usando parâmetro de Corpo

api.post('/media3', (req, resp) => {
    let notas = req.body;
    let media = (notas.nota1 + notas.nota2 + notas.nota3) / 3;
    let mediaFormatada = media.toFixed(2);

    let aprovacao = ('Parabéns! Com a nota ' + mediaFormatada + ' você passou de ano!');
    let reprovacao = ('Que pena. Com a nota ' + mediaFormatada + ' você reprovou.');

    if (media < 6) {
        resp.send({
            situacao: reprovacao
        })
    } else {
        resp.send({
            situacao: aprovacao
        })
    }

})

// ADO 4: Média das notas usando vários parâmetros (Nota 1 com rota, Nota 2 com Query e Nota 3 com Corpo).

api.post('/media4/:nota1', (req, resp) => {
    let nota1 = Number(req.params.nota1);
    let nota2 = Number(req.query.nota2);
    let nota3 = req.body.nota3;

    let media = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = media.toFixed(2);

    let aprovacao = ('Parabéns! Com a nota ' + mediaFormatada + ' você passou de ano!');
    let reprovacao = ('Que pena. Com a nota ' + mediaFormatada + ' você reprovou.');

    if (media < 6) {
        resp.send({
            situacao: reprovacao
        })
    } else {
        resp.send({
            situacao: aprovacao
        })
    }
})

// ADO 5: Média das notas com vários alunos em vetores.

api.post('/media/super', (req, resp) => {
    let notasAlunos = req.body; // O corpo do Postman aqui é construído como uma array. Lá no Body ele está entre colchetes como abaixo:

    /* 
    [
{
    "nome": "Andre",
    "notas": {
        "n1": 10,
        "n2": 9,
        "n3": 8
    }
  }
]
    */


    let mediasAlunos = []; // Essa outra array está vazia e será a composição da resposta.

    for (let aluno of notasAlunos) { // No Javascript é assim que declaramos qual o nome que cada indice da array receberá. Então, cada item da array recebe o parâmetro 'aluno'.
        let media = (aluno.notas.n1 + aluno.notas.n2 + aluno.notas.n3) / 3; // Aqui já usamos a hierarquia do JSON. Queremos as notas específicas de cada aluno.
        let situacao = media >= 6 ? 'Aprovado' : 'DP'; // Aqui não tem segredo. É a variável media sendo usada para saber se o aluno está aprovado ou não.

        mediasAlunos.push({ // O método PUSH insere dados em um vetor. Nesse caso é a media acompanhada da situação e o nome do aluno.
            nome: aluno.nome,
            media: media,
            situacao: situacao
        })
    }
    resp.send(mediasAlunos) // Finalmente, a array que antes estava vazia agora é chamada com os valores os quais foram dados PUSH.
})

// Para saber se foi:
api.get('/ping', (req, resp) => {
    resp.send('pong');
})

api.listen(5010, () => console.log('We are tuned.'));
