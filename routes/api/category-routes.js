const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

// Find one category by ID value.
router.get("/:id", async (req, res) => {
  try {
    const categoryId = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    });
    if (!categoryId) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update an existing category
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      { 
        category_name: req.body.category_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
