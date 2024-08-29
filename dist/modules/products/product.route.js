"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controler_1 = require("./product.controler");
const router = express_1.default.Router();
router.post("/", product_controler_1.productControler.createProduct);
router.get("/", product_controler_1.productControler.getProducts);
router.get("/:id", product_controler_1.productControler.getSingleProducts);
router.delete("/:id", product_controler_1.productControler.deleteProducts);
router.patch("/:id", product_controler_1.productControler.updateProduct);
exports.productRoutes = router;
