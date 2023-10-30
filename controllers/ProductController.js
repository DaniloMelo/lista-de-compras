const ProductModel = require("../models/ProducModel.js");

async function getAllProducts(req, res) {
  try {
    const productsList = await ProductModel.find();
    return res.render("index.ejs", { productsList, product: null });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function createNewProduct(req, res) {
  const product = req.body;

  if (!product) {
    res.redirect("/");
  }

  try {
    await ProductModel.create(product);
    return res.redirect("/");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function readById(req, res) {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    const productsList = await ProductModel.find();
    res.render("index.ejs", { product, productsList });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function updateProduct(req, res) {
  const product = req.body

  try {
    await ProductModel.updateOne({_id: req.params.id}, product);
    res.redirect("/")
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    await ProductModel.deleteOne({_id: req.params.id})
    res.redirect("/")
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getAllProducts,
  createNewProduct,
  readById,
  updateProduct,
  deleteProduct,
};
