# To-do List {lista de tarefas} - Projeto Final

![site](https://i.ibb.co/8rZRdcj/desktop-list.gif)
## Sobre o Projeto
O **To-do List {lista de tarefas}** Uma aplicação voltada para o comprimento de tarefas diárias, onde a API possibilita adicionar novos objetivos diários como também retirar aquele que já foi concluído. A ideia inicial é criar uma coleção onde o usuário vai adicionar seus objetivos e classificá-los por tema.

## 💾 Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | linguagem de programação |
| `nodejs` | ambiente de execução do javascript|
| `express` | framework NodeJS |
| `dotenv` | dependência para proteger dados sensíveis do projeto|
| `mongoose` | dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | gerenciador de pacotes|
| `MongoDb` | banco de dado não relacional orientado a documentos|
| `Heroku` | plataforma nuvem que faz deploy de várias aplicações back-end |
 `Postman` | interface gráfica para realizar os testes|

<br>

## 💾 Postman:

![post](https://i.ibb.co/n30Sfqz/crud-completo.gif)

<br>

**Rotas**

_**{GET}**_

:closed_book:  **"/lista"** Deverá retornar todos os cards cadastrados

:closed_book: **"/lista/[ID]"** Deverá retornar o card cadastrado por ID

**_{POST}_**

:closed_book: **"lista/register"**  Deverá criar um novo card

**_{PATCH}_**

:closed_book: **"/lista/update//[ID]"** Deverá alterar informação do card por id específico

**_{DELETE}_**

:closed_book:  **"/lista/delete/[ID]"** Deverá deletar card por id

### Front-End 
Esse projeto foi realizado toda parte do front utilizando fatch para consumir a API, aplicação foi toda feita em javascript vanilla e CSS3.
![imagem ilustrativa](https://i.ibb.co/dDv5WMB/image.png)
[Link Repositorio](https://github.com/larissavilelasobral/front-reprograma-listaDeTarefas/blob/master/js/index.js)

### Documentação

https://documenter.getpostman.com/view/16932566/U16kqQcw

## Authors

### [Larissa Vilela](https://www.linkedin.com/in/larissa-vilela-sobral/)
