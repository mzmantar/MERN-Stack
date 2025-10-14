// Removed incorrect line
const router = require('express').Router();

const { createArticle, testApi } = require('../controller/articleController');

router.get('/test', testApi);
router.post('/articles', createArticle);

module.exports = router;