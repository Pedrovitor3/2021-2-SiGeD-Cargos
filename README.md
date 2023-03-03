# API de Cargos 
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL3-blue.svg)](https://opensource.org/licenses/gpl-3.0.html)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2021-2-SiGeD-Cargos&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fga-eps-mds_2021-2-SiGeD-Cargos)


Essa API faz parte da arquitetura de microsserviços do projeto [`SiGeD`](https://github.com/fga-eps-mds/2021-2-SiGeD-Doc), sua funcionalidade  é possibilitar o controle dos dados dos cargos. 

## Como contribuir?

Gostaria de contribuir com nosso projeto? Acesse o nosso [guia de contribuição](https://fga-eps-mds.github.io/2021-2-SiGeD-Doc/contribuicao/) onde são explicados todos os passos.
Caso reste alguma dúvida, você também pode entrar em contato conosco criando uma issue.

## Documentação

A documentação do projeto pode ser acessada pelo nosso site em https://fga-eps-mds.github.io/2021-2-SiGeD-Doc/.

## Testes

Todas as funções adicionadas nessa API devem ser testadas, o repositório aceita até 20% do total de linhas não testadas. Para rodar os testes nesse repositório deve ser executado o comando:

```bash
docker-compose run api_roles bash -c  "yarn && yarn jest --coverage --forceExit"
```

## Como rodar?

O arquivo .env possui configurações iniciais que podem ser alteradas de acordo com a necessidade. São elas:
 - SECRET: chave para criptografia das senhas.
 - DB_USER: usuário de acesso ao banco de dados.
 - DB_PASS: senha de acesso ao banco de dados.
 - DB_NAME: nome da base de dados.
 - DB_HOST: host da base de dados.

Se os servidores mudarem, deve-se colocar o IP os campos CLIENTS_URL e USERS_URL.

Veja o exemplo abaixo:

```
SECRET=chavedesegredo
DB_USER=api_roles
DB_PASS=roles_password
DB_NAME=api_roles_db
DB_HOST=db_roles
```

Para rodar a API é preciso usar os seguintes comandos usando o docker:

Crie uma network para os containers da API, caso não exista:

```bash
docker network create siged_backend
```

Suba o container com o comando:

```bash
docker-compose up
```
A API estará rodando na [porta 3005](http://localhost:3005).

## Rotas

