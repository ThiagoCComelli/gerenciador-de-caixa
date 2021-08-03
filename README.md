# Gerenciador de fluxo de caixa

## System images

![Screenshot 2021-08-03 at 17-21-54 Gerenciador de caixa](https://user-images.githubusercontent.com/51216389/128081060-2ec3026e-df16-4037-8ef0-7deb7d283cf2.png)
![Screenshot 2021-08-03 at 17-22-17 Gerenciador de caixa](https://user-images.githubusercontent.com/51216389/128081070-89bc435d-3979-44c8-8a93-6d1fd390599c.png)
![Screenshot 2021-08-03 at 17-22-27 Gerenciador de caixa](https://user-images.githubusercontent.com/51216389/128081073-59003605-87a0-4df2-bd72-35bb3244730b.png)
![Screenshot_2021-05-28 React App(3)](https://user-images.githubusercontent.com/51216389/120045573-ba112080-bfe6-11eb-99e6-1ffaf67af0e1.png)
![Screenshot_2021-05-28 React App(4)](https://user-images.githubusercontent.com/51216389/120045577-bbdae400-bfe6-11eb-9394-54a178ce8977.png)


## Ferramentas utilizadas

- ReactJS
- NodeJS
    - Express
    - JWToken
    - bcrypt
- MySQL Database


## Implementações

- [x] Autenticação de usuário
- [x] Criação e manipulação de novas contas
- [x] Criação de transações
    - [x] Adicionar campo de tags para as transações
    - [x] Edição de transações
- [X] Paginação
- [X] Tratamento dos dados para melhor visualização (gráficos e previsões no futuro)
- [X] Controle manual de gastos
- [ ] Leitura de entradas e saidas a partir de extratos em PDF ou Excel
- [ ] ...

&nbsp;

# API endpoints

**Login**
----
  Authenticate user and login.

* **URL**

  /user/login

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Logado com sucesso!",
            "description": "Agora voce tem acesso ao sistema",
            "status": "success",
            "code": "LOGIN_SUCCESS"
        },
        "user": {
            "cpf": null,
            "name": "Thiago Comelli",
            "email": "thiago.comelli@outlook.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg4MjU1LCJleHAiOjE2MjMyNzQ2NTV9.VU0Wj0bPASkCs-d505I2ICtw8yNqNl4UHh7ZYuOn7UY"
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha no login!",
            "description": "Senha ou email incorrentos",
            "status": "error",
            "code": "LOGIN_ERROR"
        }
    }
    ```

* **Sample Call:**

    ```javascript
    $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"email":"thiago.comelli@outlook.com","password":"root"}}' http://localhost:3100/user/login
    ```

**Register**
----
  Register new user.

* **URL**

  /user/register

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Usuario criado com sucesso!",
            "description": "Usuario criado, efetue o login!",
            "status": "success",
            "code": "NEW_USER_SUCCESS"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na crição!",
            "description": "Usuario ja cadastrado no sistema",
            "status": "error",
            "code": "NEW_USER_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"email":"thiago.comelli@outlook.com","password":"root","name":"Thiago Comelli"}}' http://localhost:3100/user/register
  ```
  
  
**Verify token**
----
  Verify and get informations about auth token.

* **URL**

  /user/verify

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Token valido!",
            "description": "Token valido para operação",
            "status": "success",
            "code": "TOKEN_SUCCESS"
        },
        "user": {
            "cpf": null,
            "name": "Thiago Comelli",
            "email": "thiago.comelli@outlook.com"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Token invalido!",
            "description": "O token verificado nao é valido para operação",
            "status": "error",
            "code": "TOKEN_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg5MjAxLCJleHAiOjE2MjMyNzU2MDF9.tIP1XnmyyypIAbzOeq_i_TQGmxxT-jvp-cJW3gyuCOc"}}' http://localhost:3100/user/verify
  ```
 
 
**New account**
----
  Create new account for annotations.

* **URL**

  /user/new-account

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Conta criada com sucesso!",
            "description": "Conta criada e liberada para o uso",
            "status": "success",
            "code": "NEW_ACCOUNT_SUCCESS"
        },
        "account": {
            "id": 18,
            "title": "Primeiro de Teste",
            "description": "Descricao do primeiro de teste",
            "user_email": "thiago.comelli@outlook.com"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na crição!",
            "description": "A conta nao foi criada, erro interno",
            "status": "error",
            "code": "NEW_ACCOUNT_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"user":{"email":"thiago.comelli@outlook.com"},"account":{"title":"Primeiro de Teste","description":"Descricao do primeiro de teste"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg5MjAxLCJleHAiOjE2MjMyNzU2MDF9.tIP1XnmyyypIAbzOeq_i_TQGmxxT-jvp-cJW3gyuCOc"}}' http://localhost:3100/user/new-account
  ```
 
 
**New transaction**
----
  Create new transaction for your account.

* **URL**

  /user/new-transaction

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Transação criada com sucesso!",
            "description": "A transação foi criada com sucesso",
            "status": "success",
            "code": "NEW_TRANSACTION_SUCCESS"
        },
        "account": {
            "id": 38,
            "user_email": "thiago.comelli@outlook.com",
            "account_id": 17,
            "title": "adsdasd",
            "description": "asd",
            "modality": "Manual",
            "type": "Saida",
            "value": 123.72,
            "date": "2021-06-06T03:00:00.000Z",
            "tags": [
                {
                    "id": 50,
                    "title": "comida",
                    "transaction_id": 38,
                    "account_id": 17
                },
                {
                    "id": 51,
                    "title": "ifood",
                    "transaction_id": 38,
                    "account_id": 17
                }
            ]
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na criação!",
            "description": "A transação nao foi criada, erro interno",
            "status": "error",
            "code": "NEW_TRANSACTION_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"account":{"id":"17"},"transaction":{"title": "adsdasd","description":"asd","modality":"Manual","type":"Saida","value":"123.72","date":"2021-06-06 00:00:00","tags":[{"title":"comida"},{"title":"ifood"}]},"user":{"name":"Thiago Comelli","email":"thiago.comelli@outlook.com"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg5MjAxLCJleHAiOjE2MjMyNzU2MDF9.tIP1XnmyyypIAbzOeq_i_TQGmxxT-jvp-cJW3gyuCOc"}}' http://localhost:3100/user/new-transaction
  ```
 
 
**New tag**
----
  Create a new tag for your transaction.

* **URL**

  /user/new-tag

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Tag criada com sucesso!",
            "description": "A Tag foi criada com sucesso",
            "status": "success",
            "code": "NEW_TAG_SUCCESS"
        },
        "tag": {
            "id": 57,
            "title": "f",
            "transaction_id": 32,
            "account_id": 17
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na criação!",
            "description": "A Tag nao foi criada, erro interno",
            "status": "error",
            "code": "NEW_TAG_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"user":{"cpf":null,"name":"Thiago Comelli","email":"thiago.comelli@outlook.com"},"tag":{"title":"f"},"transaction":{"id":32,"user_email":"thiago.comelli@outlook.com","account_id": 17,"title": "a","description":"a","modality":"Manual","type":"Entrada","value":0.01,"date":"2021-06-06T03:00:00.000Z","tags":[]},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg5MjAxLCJleHAiOjE2MjMyNzU2MDF9.tIP1XnmyyypIAbzOeq_i_TQGmxxT-jvp-cJW3gyuCOc"}}' http://localhost:3100/user/new-tag
  ```
 
 
**Update transaction**
----
  Update a transaction.

* **URL**

  /user/update-transaction

* **Method:**

  `POST`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Edição feita com sucesso!",
            "description": "A transação foi editada e atualizada",
            "status": "success",
            "code": "EDIT_TRANSACTION_SUCCESS"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na edição!",
            "description": "A transação nao foi editada",
            "status": "error",
            "code": "EDIT_TRANSACTION_ERROR"  
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --header "Content-Type: application/json" --request POST --data '{"data":{"user":{"cpf":null,"name":"Thiago Comelli","email":"thiago.comelli@outlook.com"},"transaction":{"id":32,"user_email":"thiago.comelli@outlook.com","account_id": 17,"title": "a","description":"a","modality":"Manual","type":"Entrada","value":0.01,"date":"2021-06-06T03:00:00.000Z"},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTg5MjAxLCJleHAiOjE2MjMyNzU2MDF9.tIP1XnmyyypIAbzOeq_i_TQGmxxT-jvp-cJW3gyuCOc"}}' http://localhost:3100/user/update-transaction
  ```
**Get accounts**
----
  Get all accounts by user.

* **URL**

  /user/get-accounts

* **Method:**

  `GET`
  
*  **URL Params**

    **Required:**
 
    `email=[string]&token=[string]`


* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Busca feita com sucesso!",
            "description": "Busca feita e resultado retornado",
            "status": "success",
            "code": "GET_ACCOUNTS_SUCCESS"
        },
        "accounts": [
            {
                "id": 17,
                "title": "Fluxo principal - Thiago",
                "description": "Historico de dinheiro, todas as entradas e saidas",
                "user_email": "thiago.comelli@outlook.com"
            },
            {
                "id": 18,
                "title": "Primeiro de Teste",
                "description": "Descricao do primeiro de teste",
                "user_email": "thiago.comelli@outlook.com"
            },
            {
                "id": 19,
                "title": "Primeiro de Teste",
                "description": "Descricao do primeiro de teste",
                "user_email": "thiago.comelli@outlook.com"
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na busca!",
            "description": "Falha na busca realizada e nada realizado",
            "status": "error",
            "code": "GET_ACCOUNTS_ERROR" 
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --request GET 'http://localhost:3100/user/get-accounts?email=thiago.comelli@outlook.com&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTkyMTExLCJleHAiOjE2MjMyNzg1MTF9.j85CrxAqn83pf5uxAh6ywYrVmh9nnKzu6peSb3Gttek'
  ```


**Get transactions**
----
  Get all transactions of an account.

* **URL**

  /user/get-transactions

* **Method:**

  `GET`
  
*  **URL Params**

    **Required:**
 
    `email=[string]&account_id=[string]&token=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Busca feita com sucesso!",
            "description": "Busca feita e resultado retornado",
            "status": "success",
            "code": "GET_TRANSACTIONS_SUCCESS"
        },
        "transactions": [
            {
                "id": 32,
                "user_email": "thiago.comelli@outlook.com",
                "account_id": 17,
                "title": "a",
                "description": "a",
                "modality": "Manual",
                "type": "Entrada",
                "value": 0.01,
                "date": "2021-05-28T03:00:00.000Z",
                "tags": [
                    {
                        "id": 46,
                        "title": "salario",
                        "transaction_id": 32,
                        "account_id": 17
                    }
                ]
            }
        ]
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha na busca!",
            "description": "Falha na busca realizada e nada realizado",
            "status": "error",
            "code": "GET_TRANSACTIONS_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --request GET 'http://localhost:3100/user/get-transactions?email=thiago.comelli@outlook.com&account_id=173&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTkyMTExLCJleHAiOjE2MjMyNzg1MTF9.j85CrxAqn83pf5uxAh6ywYrVmh9nnKzu6peSb3Gttek'
  ```


**Delete transaction**
----
  Delete transaction of an account.

* **URL**

  /user/delete-transaction

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**
 
    `email=[string]&id=[string]&token=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Delete feito com sucesso!",
            "description": "Transação deletada da sua conta",
            "status": "success",
            "code": "DELETE_TRANSACTION_SUCCESS"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha no delete!",
            "description": "A transação nao foi deletada da sua conta",
            "status": "error",
            "code": "DELETE_TRANSACTION_ERROR"  
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --request DELETE 'http://localhost:3100/user/delete-transaction?email=thiago.comelli@outlook.com&id=173&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTkyMTExLCJleHAiOjE2MjMyNzg1MTF9.j85CrxAqn83pf5uxAh6ywYrVmh9nnKzu6peSb3Gttek'
  ```

**Delete account**
----
  Delete account of an user

* **URL**

  /user/delete-account

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**
 
    `email=[string]&id=[string]&token=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Conta deletada com sucesso!",
            "description": "Conta deletada e retirada de uso",
            "status": "success",
            "code": "DELETE_ACCOUNT_SUCCESS"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha no delete!",
            "description": "A conta nao foi deletada, erro interno",
            "status": "error",
            "code": "DELETE_ACCOUNT_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --request DELETE 'http://localhost:3100/user/delete-account?email=thiago.comelli@outlook.com&id=173&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTkyMTExLCJleHAiOjE2MjMyNzg1MTF9.j85CrxAqn83pf5uxAh6ywYrVmh9nnKzu6peSb3Gttek'
  ```

**Delete tag**
----
  Delete a tag of an transaction

* **URL**

  /user/delete-tag

* **Method:**

  `DELETE`
  
*  **URL Params**

    **Required:**
 
    `email=[string]&id=[string]&token=[string]`

* **Success Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Tag deletada com sucesso!",
            "description": "A Tag foi deletada com sucesso",
            "status": "success",
            "code": "DELETE_TAG_SUCCESS"
        },
        "tag": {
            "id": "10"
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 200
    **Content:** 
    ```
    {
        "status": {
            "title": "Falha no delete!",
            "description": "A Tag nao foi deletada, erro interno",
            "status": "error",
            "code": "DELETE_TAG_ERROR"
        }
    }
    ```

* **Sample Call:**

  ```javascript
  $ curl --request DELETE 'http://localhost:3100/user/delete-tag?email=thiago.comelli@outlook.com&id=10&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpYWdvIENvbWVsbGkiLCJlbWFpbCI6InRoaWFnby5jb21lbGxpQG91dGxvb2suY29tIiwiaWF0IjoxNjIzMTkyMTExLCJleHAiOjE2MjMyNzg1MTF9.j85CrxAqn83pf5uxAh6ywYrVmh9nnKzu6peSb3Gttek'
  ```
  
&nbsp;

