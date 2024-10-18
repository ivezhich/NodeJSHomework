
const express = require('express');
const router = express.Router();
const { multer, STORAGE_PATH } = require('../middleware/file.js');
const path = require('node:path');
const { storage } = require('../controllers/books.controller.js');



router.get('/', async (req, res) => {
    res.json(await storage.getAll());
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        res.json(await storage.getOne(id));
    }
    catch (e) {
        res.status(404);
        res.json('Code: 404');
    }
});

router.post('/', multer.single('book'),
    async (req, res) => {
        try {
            const newBook = {
                title,
                description,
                authors,
                favorite,
                fileCover,
                fileName
            } = JSON.parse(req.body.info);

            newBook.fileBook = req.file.filename;

            res.json(await storage.create(newBook));
            res.status(201);
        } catch (e) {
            console.log(e);
            res.status(500);
            res.json('Code: 500');
        }
    });


router.put('/:id', async (req, res) => {
    const content = {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    } = req.body;
    const { id } = req.params;

    try {
        res.json(await storage.update(id, content));
    }
    catch (e) {
        res.status(404);
        res.json('Code: 404');
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await storage.delete(id);
        if (result === null) throw new Error();
        res.json('ok');
    } catch (e) {
        res.status(404);
        res.json('Code: 404');
    }
});

router.get('/:id/download', async (req, res) => {
    const { id } = req.params;

    try {
        const book = await storage.getOne(id);
        res.download(path.join(STORAGE_PATH, book.fileBook), book.fileName);
    } catch (e) {
        res.status(404);
        res.json('Code: 404');
    }
});

module.exports = router;