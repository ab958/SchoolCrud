"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const studentModel_1 = require("../models/studentModel");
class StudentController {
    // constructor() { }
    getProduct(_id) {
        return studentModel_1.StudentTable.findById(_id);
    }
    SaveProduct(product) {
        return new studentModel_1.StudentTable(product).save();
    }
    updateProduct(product) {
        return studentModel_1.StudentTable.findByIdAndUpdate(product._id, product, {
            new: true
        });
    }
    deleteProduct(_id) {
        return studentModel_1.StudentTable.findByIdAndDelete(_id);
    }
    getProductList() {
        return studentModel_1.StudentTable.find();
    }
}
exports.StudentController = StudentController;
