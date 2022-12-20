const router = require("express").Router();
const { restart } = require("nodemon");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag }],
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
      include: [{ model: Product }, { model: ProductTag }],
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
router.post("/", (req, res) => {
  try {
    const newTag = new Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag's name by its id
router.put("/:id", async (req, res) => {
  {
    await Tag.update(
      { name: req.body.name },
      {
        where: { 
          id: req.params.id 
        },
      }
    );
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
