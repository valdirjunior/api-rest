# API REST - Produtos e Categorias

Esta é uma API RESTful desenvolvida para a disciplina de **Desenvolvimento Web 2**, seguindo os princípios REST.  
O sistema simula um gerenciamento de **produtos** e **categorias** de uma loja de informática.

---

## Instalação

Clone o projeto e acesse o diretório:

```bash
git clone <link-do-repositorio>
cd nome-do-projeto
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
| GET    | `/produtos`             | Lista todos os produtos         |
| GET    | `/produtos/:id`         | Busca um produto por ID         |
| POST   | `/produtos`             | Cria um novo produto            |
| PUT    | `/produtos/:id`         | Atualiza um produto existente   |
| DELETE | `/produtos/:id`         | Remove um produto               |

**Exemplo de corpo para POST / PUT:**

```json
{
    "nome": "Webcam Full HD",
    "preco": 250.00,
    "categoriaId": 3
}
```

---

### Categorias

| Método | Rota                  | Descrição                       |
|:------:|:---------------------- |:------------------------------- |
| GET    | `/categorias`           | Lista todas as categorias       |
| GET    | `/categorias/:id`       | Busca uma categoria por ID      |
| POST   | `/categorias`           | Cria uma nova categoria         |
| PUT    | `/categorias/:id`       | Atualiza uma categoria          |
| DELETE | `/categorias/:id`       | Remove uma categoria            |

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
- **Filtros combinados** (`/produtos?categoriaId=3&sortBy=nome&order=asc`).

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
