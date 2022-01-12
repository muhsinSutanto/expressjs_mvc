const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
   res.render("add-product", {
      pageTitle: "add-product",
      path: "/admin/add-product",
      formCss: true,
      productCss: true,
      activeAddProduct: true,
   });
};

exports.postAddProduct = (req, res, next) => {
   const product = new Product(req.body.title);
   product.save();
   res.redirect("/");
};

exports.getProduct = (req, res, next) => {
   Product.fetchAll((products) => {
      res.render("shop", {
         prods: products,
         pageTitle: "shop",
         path: "/",
         handProducts: products.length > 0,
         activeShop: true,
         productCss: true,
      });
   });
};
