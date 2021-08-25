import { StudentTable } from '../models/studentModel';

export class StudentController {
    // constructor() { }
    getProduct(_id: string) {
        return StudentTable.findById(_id);
    }
    SaveProduct(product: any) {
        return new StudentTable(product).save();
    }
    updateProduct(product: any) {
        return StudentTable.findByIdAndUpdate(product._id, product, {
            new: true
        });
    }
    deleteProduct(_id: string) {
        return StudentTable.findByIdAndDelete(_id);
    }
    getProductList() {
        return StudentTable.find();
    }
}