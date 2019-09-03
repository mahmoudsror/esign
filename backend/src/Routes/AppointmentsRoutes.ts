
import { Router } from 'express';
import { UserController, AppointmentController } from "../Controllers/index";

const router: Router = Router();

router.get('/', AppointmentController.list);
router.get('/consultants', UserController.listConsultants);
router.get('/consultants/:id', UserController.ConsultantDetails);
router.get('/consultants/activate/:id', UserController.activateConsultant);
router.get('/consultants/deactivate/:id', UserController.deactivateConsultant);



export const appointmentsRoutes: Router = router;