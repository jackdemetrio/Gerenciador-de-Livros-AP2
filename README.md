AP2 - Aplicações Front-End

Identificação

Nome: Jaqueline Demetrio Teixeira
Curso: Análise e Desenvolvimento de Sistemas
Disciplina: Aplicações Front-End
Instituição: Universidade Luterana do Brasil (ULBRA)


Tema do Projeto

CRUD de Livros com Angular e JSON Server


Descrição

Este projeto consiste em uma aplicação web desenvolvida em Angular para realizar o gerenciamento de livros através das operações de cadastro, listagem, edição e exclusão de registros.

A aplicação utiliza o JSON Server como API simulada, permitindo armazenar os dados em um arquivo db.json e realizar operações REST utilizando requisições HTTP.

O sistema foi desenvolvido seguindo a arquitetura proposta na disciplina, utilizando componentes, services e models para organizar e separar as responsabilidades da aplicação.


Funcionalidades

* Cadastro de livros
* Listagem de livros
* Edição de livros
* Exclusão de livros
* Integração com JSON Server
* Atualização automática da lista após operações
* Validação básica dos campos do formulário
* Confirmação antes da exclusão


Estrutura do Projeto


src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── livro-form/
│   │   └── livro-list/
│   │
│   ├── models/
│   │   └── livro.ts
│   │
│   ├── services/
│   │   └── livro.service.ts
│   │
│   ├── app.config.ts
│   └── app.ts
│
└── assets/

db.json


Modelo da Entidade

<!-- 
export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  categoria: string;
  anoPublicacao: number;
  editora: string;
  paginas: number;
  disponivel: boolean;
} -->


Tecnologias Utilizadas

* Angular
* TypeScript
* HTML
* CSS
* JSON Server
* RxJS
* Git
* GitHub

Link para clonar o repositório

git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git


Exemplo do Banco de Dados


<!-- {
  "livros": [
    {
      "id": "1",
      "titulo": "Verity",
      "autor": "Colleen Hoover",
      "categoria": "Suspense Psicológico",
      "anoPublicacao": 2018,
      "editora": "Galera Record",
      "paginas": 320,
      "disponivel": true
    }
  ]
}
 -->

Serviço Angular

O LivroService é responsável pela comunicação com a API REST simulada pelo JSON Server.

Operações implementadas:

* GET → listar livros
* POST → cadastrar livro
* PUT → atualizar livro
* DELETE → excluir livro


Link do Vídeo Demonstrativo

https://youtu.be/ROQ75cwQ530?si=aizhvaTszyki9604


Autor

Jaqueline Demetrio Teixeira

Trabalho desenvolvido para a disciplina de Aplicações Front-End - ULBRA.
