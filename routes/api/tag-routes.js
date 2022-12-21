const router = require("express").Router();
const { restart } = require("nodemon");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).send(err);
  }
});

// find single tag by id
router.get("/:id", async (req, res) => {
  try {
    const idTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!idTag) {
      res.status(404).json({ message: " Product Tag not found" });
      return;
    }
    res.status(200).json(idTag);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new Tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag's name by its id
router.put("/:id", async (req, res) => {
  try {
  const updatedTag = await Tag.update(
      { product_name: req.body.name,
        price: req.body.price,
        stock: req.body.stock 
      }, 
      {
        where: { 
          id: req.params.id 
        },
      }
    );
    if (!updatedTag) {
      res.status(404).json({ message: " Tag not found" });
  }
    res.status(200).json(updatedTag);
  }catch (err) {
    res.status(500).send(err);
  }
});

// delete a tag by its id value
router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
