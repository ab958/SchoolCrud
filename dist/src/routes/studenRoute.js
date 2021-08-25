"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = exports.StudentPL = void 0;
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controller/studentController");
class StudentPL {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //retruns all products
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            new studentController_1.StudentController()
                .getProductList()
                .then((products) => {
                if (!products) {
                    console.error(404, 'No products found');
                }
                res.status(200).json({
                    products
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }));
        //save a product
        this.router.post('/post', (req, res) => __awaiter(this, void 0, void 0, function* () {
            new studentController_1.StudentController()
                .SaveProduct(req.body.product)
                .then((product) => {
                if (!product) {
                    console.error(404, 'product not saved');
                }
                res.status(200).json({
                    product
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }));
        //update a product
        this.router.put('/update', (req, res) => __awaiter(this, void 0, void 0, function* () {
            new studentController_1.StudentController()
                .updateProduct(req.body.product)
                .then((product) => {
                if (!product) {
                    console.error(404, 'product not updated');
                }
                res.status(200).json({
                    product
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }));
        // get one product
        this.router.get('/stu', (req, res) => __awaiter(this, void 0, void 0, function* () {
            new studentController_1.StudentController()
                .getProduct(req.body.id)
                .then((product) => {
                if (!product) {
                    console.error(404, 'No product found');
                }
                res.status(200).json({
                    product
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }));
        //delete a product
        this.router.delete('/studentdel', (req, res) => __awaiter(this, void 0, void 0, function* () {
            new studentController_1.StudentController()
                .deleteProduct(req.body.id)
                .then((product) => {
                if (!product) {
                    console.error(404, 'No products found');
                }
                res.status(200).json({
                    message: "Product deleted"
                });
            })
                .catch((err) => {
                console.log(err);
            });
        }));
    }
}
exports.StudentPL = StudentPL;
exports.StudentRoutes = new StudentPL().router;
