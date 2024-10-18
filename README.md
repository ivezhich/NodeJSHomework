# NodeJSHomework
## Запуск
```
docker-compose up 
```

## Папки с данными
```
file_storage - хранилище файлов
mongodb/db - файлы базы данных
logs - логи
```

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