const router = require('express').Router();

const api = require('./api');

router.get('/', api.listAll);
router.get('/name/:name', api.filterByName);
router.get('/random', api.getRandom);
router.get('/:id', api.get);
router.get('/skill/:skill', api.filterBySkill);
router.post('/', api.create);
router.put('/:id', api.update);
router.delete('/:id', api.delete);

module.exports = router;
