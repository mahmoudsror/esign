
import { Router } from 'express';
import { UserController } from "../Controllers/index";

const router: Router = Router();
router.get('/patients', UserController.listPatinets);
router.get('/consultants', UserController.listConsultants);
router.get('/consultants/:id', UserController.ConsultantDetails);
router.get('/consultants/activate/:id', UserController.activateConsultant);
router.get('/consultants/deactivate/:id', UserController.deactivateConsultant);


export const userRoutes: Router = router;