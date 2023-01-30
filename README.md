# API para uplaod de imagens
Essa aplicação tem como objetivo o aprendizado do uso do multer para fazer uploads de imagens

## Endpoints
### POST /pictures
Esse endpoint é responsável por fazer o upload de alguma imagem e registrar a mesma no banco de dados
#### Parâmetros
O nome do arquivo e a imagem que será salva.
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai fazer o upload da imagem.

Exemplo de resposta:
```

{
  "picture": {
    "name": "Alguma foto",
    "src": "uploads\\1675100103084.jpg",
    "_id": "63d7ffc7dc7a0ee3484491d6",
    "__v": 0
  },
  "msg": "Imagem salva com sucesso"
}

```

##### Interal Server Error! 500
Caso essa resposta aconteça ocorreu um erro ao salvar a imagem.

Exemplo de resposta:

```

{
  "message": "Erro ao salvar imagem."
}

```

### GET /pictures
Esse endpoint é responsável por mostrar todos as imagens que foram salvar no banco de dados
#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber todas as imagens cadastradas

Exemplo de resposta:
```

[
  {
    "_id": "63d7ffc7dc7a0ee3484491d6",
    "name": "Alguma foto",
    "src": "uploads\\1675100103084.jpg",
    "__v": 0
  }
]

```

##### Interal Server Error! 500
Caso essa resposta aconteça ocorreu um erro mostrar as imagens.

Exemplo de resposta:

```

{ 
  "message": "Erro ao buscar imagens."
}

```

### DELETE /pictures/:id
Esse endpoint é responsável por deletar a imagem do banco de dados
#### Parâmetros
O id da imagem cadastrada no banco de dados
#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai deletar a imagem do banco de dados

Exemplo de resposta:
```

{
  "message": "Imagem removida com sucesso."
}

```

##### Not Found! 404
Caso essa resposta aconteça, a imagem a ser deletada não foi encontrada

Exemplo de resposta:

```

{
  "message": "Imagem não encontrada"
}

```

##### Interal Server Error! 500
Caso essa resposta aconteça houve um erro no processo de remoção.
Exemplo de resposta:

```

{
  "message": "Erro ao deletar imagens."
}

```
