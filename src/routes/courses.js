const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController'); // import controller


router.get('/create', courseController.create);
router.post('/store', courseController.store); // method post
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.delete);
router.get('/:slug', courseController.show);


module.exports = router;