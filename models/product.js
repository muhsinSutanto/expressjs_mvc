const products = [];
const fs = require("fs");
const path = require("path");
module.exports = class Product {
   constructor(t) {
      this.title = t;
   }

   save() {
      const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");
      //read file if it's not error set new product and push object to product and write file on specific path and content
      fs.readFile(p, (err, content) => {
         console.log(err);
         let products = [];
         if (!err) {
            products = JSON.parse(content);
         }
         products.push(this);
         fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
         });
      });
   }

   static fetchAll(cb) {
      const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");
      fs.readFile(p, (err, content) => {
         if (err) {
            cb([]);
         }
         cb(JSON.parse(content));
      });
   }
};
