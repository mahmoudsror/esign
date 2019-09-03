import { Router } from 'express';
import {  TransactionController } from "../Controllers/index";

const router: Router = Router();

router.get('/', TransactionController.list);


export const transactionsRoutes: Router = router;