import { TeacherTable } from '../models/teacherModel';

export class TeacherController {
    // constructor() { }
    getProduct(_id: string) {
        return TeacherTable.findById(_id);
    }
    SaveProduct(product: any) {
        return new TeacherTable(product).save();
    }
    updateProduct(product: any) {
        return TeacherTable.findByIdAndUpdate(product._id, product, {
            new: true
        });
    }
    deleteProduct(_id: string) {
        return TeacherTable.findByIdAndDelete(_id);
    }
    getProductList() {
        return TeacherTable.find();
    }
}