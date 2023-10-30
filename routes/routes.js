const route = require("express").Router();
const productController = require("../controllers/ProductController.js");

route.get("/", productController.getAllProducts);
route.post("/newProduct", productController.createNewProduct);
route.get("/search/:id", productController.readById);
route.post("/update/:id", productController.updateProduct);
route.get("/delete/:id", productController.deleteProduct)

module.exports = route;
