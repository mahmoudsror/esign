import { Router } from 'express';
import {  FeedbackController } from "../Controllers/index";

const router: Router = Router();

router.get('/', FeedbackController.list);


export const feedbacksRoutes: Router = router;