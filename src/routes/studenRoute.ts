import express from 'express';
import { StudentController } from '../controller/studentController';

export class StudentPL {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        //retruns all products
        this.router.get('/', async (req, res) => {
            new StudentController()
                .getProductList()
                .then((products: any) => {
                    if (!products) {
                        console.error(404, 'No products found');
                    }
                    res.status(200).json({
                        products
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                });
        });
        //save a product
        this.router.post('/post', async (req, res) => {
            new StudentController()
                .SaveProduct(req.body.product)
                .then((product: any) => {
                    if (!product) {
                        console.error(404, 'product not saved');
                    }
                    res.status(200).json({
                        product
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                });
        });
        //update a product
        this.router.put('/update', async (req, res) => {
            new StudentController()
                .updateProduct(req.body.product)
                .then((product: any) => {
                    if (!product) {
                        console.error(404, 'product not updated');
                    }
                    res.status(200).json({
                        product
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                });
        });
        // get one product
        this.router.get('/stu', async (req, res) => {
            new StudentController()
                .getProduct(req.body.id)
                .then((product: any) => {
                    if (!product) {
                        console.error(404, 'No product found');
                    }
                    res.status(200).json({
                        product
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                });
        });
        //delete a product
        this.router.delete('/studentdel', async (req, res) => {
            new StudentController()
                .deleteProduct(req.body.id)
                .then((product: any) => {
                    if (!product) {
                        console.error(404, 'No products found');
                    }
                    res.status(200).json({
                        message:"Product deleted"
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                });
        });
    }
}
export const StudentRoutes = new StudentPL().router;