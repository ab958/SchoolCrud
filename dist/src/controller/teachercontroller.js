"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const teacherModel_1 = require("../models/teacherModel");
class TeacherController {
    // constructor() { }
    getProduct(_id) {
        return teacherModel_1.TeacherTable.findById(_id);
    }
    SaveProduct(product) {
        return new teacherModel_1.TeacherTable(product).save();
    }
    updateProduct(product) {
        return teacherModel_1.TeacherTable.findByIdAndUpdate(product._id, product, {
            new: true
        });
    }
    deleteProduct(_id) {
        return teacherModel_1.TeacherTable.findByIdAndDelete(_id);
    }
    getProductList() {
        return teacherModel_1.TeacherTable.find();
    }
}
exports.TeacherController = TeacherController;
