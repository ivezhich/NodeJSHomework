
const express = require('express');
const router = express.Router();
const { multer, STORAGE_PATH } = require('../middleware/file');
const path = require('node:path');

const { v4: uuid } = require('uuid');

class Book {
    constructor(title = "", description = "",
        authors = "", favorite = "", fileCover = "", fileName = "", fileBook = "",
        id = uuid()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
    }
}

const stor = {
    books: [
        new Book('11', '12', '13', '14', '15'),
        new Book('21', '22', '23', '24', '25'),
    ],
};

router.get('/', (req, res) => {
    const { books } = stor;
    res.render('books/index', { title: 'Список книг', books });
});
// Страница создания книги
router.get('/create', (req, res) => {
    res.render('books/create', {
        title: 'Добавление книги',
        book: new Book()
    });
});
// Добавление созданной книги и выход назад
router.post('/create', multer.single('book'),
    (req, res) => {
        const { books } = stor;

        const { title,
            description,
            authors,
            favorite,
            fileCover,
            fileName } = req.body;

        const newBook = new Book(title, description,
            authors,
            favorite,
            fileCover,
            fileName,
            req.file.filename);
        books.push(newBook);

        res.status(201);
        // res.json(newBook);
        res.redirect('/');
    });
// Просмотр книги по ID
router.get('/view/:id', (req, res) => {
    const { books } = stor;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.render('books/view', {
            title: books[idx].title,
            book: books[idx]
        });
    } else {
        //res.status(404);
        res.redirect('/404');
    }
});

router.get('/404', (req, res) => {

    res.render('errors/404', {
        title: "404 запись не найдена"
    });

});

// Страница изменения книги
router.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const { books } = stor;
    const idx = books.findIndex(el => el.id === id);
    if (idx !== -1) {
        res.render('books/update', { title: 'Редактирование информации о книге', book: books[idx] });
    } else {
        res.status(404);
        res.redirect('/404');
    }
});
// запись изменения книги
router.post('/update/:id', multer.none(), (req, res) => {
    const { books } = stor;

    const { title,
        description,
        authors,
        favorite,
        fileCover,
        fileName } = req.body;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        };
        res.redirect('/');
    } else {
        res.status(404);
        res.redirect('/404');
    }
});


router.post('/delete/:id', (req, res) => {
    const { books } = stor;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        books.splice(idx, 1);
        res.redirect("/");
    } else {
        res.status(404);
        res.redirect('/404');
    }
});


router.get('/:id/download', (req, res) => {
    const { books } = stor;
    const { id } = req.params;
    const idx = books.findIndex(el => el.id === id);

    if (idx !== -1) {
        res.download(path.join(STORAGE_PATH, books[idx].fileBook), books[idx].fileName);
    } else {
        res.status(404);
        res.redirect('/404');
    }
});

module.exports = router;