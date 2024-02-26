import express from 'express'
import { userSignup , userlogin} from '../Controller/userController.js';
import { getProducts , getProductById } from '../Controller/Product-controller.js';
const router = express.Router();

router.post('/signup', userSignup);
router.post('/login' , userlogin);

router.get('/products', getProducts);
router.get('/product/:id' , getProductById);
export default router;   