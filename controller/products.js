const products = [];

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
   products.push({ title: req.body.title });
   res.redirect("/");
};

exports.getProduct = (req, res, next) => {
   res.render("shop", {
      prods: products,
      pageTitle: "shop",
      path: "/",
      handProducts: products.length > 0,
      activeShop: true,
      productCss: true,
   });
};
