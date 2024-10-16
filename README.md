# NodeJSHomework
# 007_middleware. Для запуска выполнить команду:
npm run dev 
порт по умолчанию 3000

# Пример запроса 
GET localhost:3000/api/books

## Использование
Метод|URL | Действие | Комментарий
--- | --- | ---  | ---
`POST`|`/api/user/login`|авторизация пользователя||
`GET`|`/api/books`|получить все книги||
`GET`|`/api/books/:id`|получить книгу по ID||
`POST`|`/api/books`|создать книгу|`Content-type multipart/form-data; поле info - JSON с информацией о книге; поле  book - файл с книгой`|
`PUT`|`/api/books/:id`|редактировать книгу по ID||
`DELETE`|`/api/books/:id`|удалить книгу по ID||
`GET`|`/api/books/:id/download`|скачать книгу по ID||