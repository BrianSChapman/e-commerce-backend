const router = require('express').Router();
const { restart } = require('nodemon');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{model:Product }, {model:ProductTag}],
    });
    res.status(200).json(allTags);
  } catch (err) {
      res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const idTag = await Tag.findByPk(req.params.id); {
      include: [{model:Product }, {model:ProductTag}],
    }
  }
  
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newTag = new Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
