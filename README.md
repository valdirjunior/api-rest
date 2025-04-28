# API REST - Produtos e Categorias

Esta é uma API RESTful desenvolvida para a disciplina de **Desenvolvimento Web 2**, seguindo os princípios REST.  
O sistema simula um gerenciamento de **produtos** e **categorias** de uma loja de informática.

---

## Instalação

Clone o projeto e acesse o diretório:

```bash
git clone https://github.com/valdirjunior/api-rest.git
cd api-rest
```

Instale as dependências:

```bash
npm install express
npm install cors
```

Inicie o servidor:

```bash
node server.js
```

O servidor estará rodando em:  
`http://localhost:3000`

---

## Endpoints

### Produtos

| Método | Rota                  | Descrição                       |
|:------:|:---------------------- |:------------------------------- |
| GET    | `/api/v1/produtos`             | Lista todos os produtos         |
| GET    | `/api/v1/produtos/:id`         | Busca um produto por ID         |
| POST   | `/api/v1/produtos`             | Cria um novo produto            |
| PUT    | `/api/v1/produtos/:id`         | Atualiza um produto existente   |
| DELETE | `/api/v1/produtos/:id`         | Remove um produto               |

**Exemplo de corpo para POST / PUT:**

```json
{
    "nome": "Webcam Full HD",
    "preco": 250.00,
    "categoriaID": 3
}
```

---

### Categorias

| Método | Rota                  | Descrição                       |
|:------:|:---------------------- |:------------------------------- |
| GET    | `/api/v1/categorias`           | Lista todas as categorias       |
| GET    | `/api/v1/categorias/:id`       | Busca uma categoria por ID      |
| POST   | `/api/v1/categorias`           | Cria uma nova categoria         |
| PUT    | `/api/v1/categorias/:id`       | Atualiza uma categoria          |
| DELETE | `/api/v1/categorias/:id`       | Remove uma categoria            |

**Exemplo de corpo para POST / PUT:**

```json
{
    "nome": "Acessórios"
}
```
---

## Funcionalidades Extras

- **Filtro** de produtos por nome (`?nome=notebook`).
- **Ordenação** dos produtos (`?sortBy=preco&order=asc`).
- **Paginação** (`?page=1&limit=5`).
- **Filtros combinados** (`/produtos?categoriaID=3&sortBy=nome&order=asc`).

---

## Exemplos de Uso

- **Listar produtos paginados:**
  ```
  GET http://localhost:3000/produtos?page=1&limit=3
  ```
- **Buscar produtos ordenados por preço (decrescente):**
  ```
  GET http://localhost:3000/produtos?sortBy=preco&order=desc
  ```
- **Buscar produtos por nome:**
  ```
  GET http://localhost:3000/produtos?nome=monitor
  ```

---

## Desenvolvido por

**Valdir Rugiski Junior**  
Curso: Ciência da Computação  
Disciplina: Desenvolvimento Web 2
