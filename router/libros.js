const express = require('express');
const router = express.Router();

const libroController = require('../controller/libroController');

// router.get('/', libroController.mostrar)

router.route('/libros')
    .get(libroController.mostrar)


module.exports = router