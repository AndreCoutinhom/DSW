# Desenvolvimento de Sistemas Web

# Anotações importantes

## Comandos e configurações

* `npm init -y` inicia o projeto
  > Lembre-se de colocar o terminal em modo CMD ao invés do PS padrão.
* `npm i express` para instalar o pacote express, que permite que o javascript funcione como um criador de API.
* `npm i express nodemon dotenv cors` para instalar o pacote express com outras características. O nodemon permite atualizar a api automaticamente conforme alterações no código.
* `node file.js` lança a API criada em javascript.
* `npm i mysql2` habilita o banco de dados local para interagir com a API.

### JSON

* Preste atenção ao tipo de texto. Deve estar com tipo de texto "module":
  ``` json
  {
    "name": "aula1",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "module",
    "dependencies": {
      "express": "^5.2.1"
    }
  }

  ```

### Postman

A extensão do Postman, ou outro serviço de requisições HTTP deve ser instalada para que, após a criação e lançamento da API, os *requests* possam ser feitos.

### Nodemon

Para o nodemon funcionar, deve-se adicionar uma variável start no `package.json`:

``` json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon src/api.js"
  },
```

## Camadas de API

### Camada Controller

Ela é responsável para dividir os endpoints por assunto. Dessa forma evitamos que muitos endpoints sejam alocados em um único arquivo

### Camada Services

A camada services é responsável pelo processamento das APIs. Todas as funções são colocadas nos arquivos da pasta services, e as funções são, posteriormente, chamadas nos arquivos da camada controller.

### Camdada Repository

Os arquivos dessa camada realizam as operações no banco de dados. É através dessa camada que as conexões são efetuadas; geralmente por meio de um arquivo `connection.js`. O arquivo `connection.js` vai armazenar, SOMENTE, os dados dos bancos criados. Depois ela é importada para o repositório.

> OBSERVAÇÃO: Para cada tabela do banco de dados, um arquivo no Controller, no Service e no Repository.

---
