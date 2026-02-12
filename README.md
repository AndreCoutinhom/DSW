# DSW

## Anotações importantes

### Comandos

* `npm init -y` inicia o projeto.
* `npm i express` para instalar o pacote express, que permite que o javascript funcione como um criador de API.
* `node file.js` lança a API criada em javascript.

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

