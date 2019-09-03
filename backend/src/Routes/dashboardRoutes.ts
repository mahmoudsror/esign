
import { Router } from 'express';
import { DashboardStatisticsController } from "../Controllers/index";

const router: Router = Router();

router.get('/statistics', DashboardStatisticsController.summaryStatistics);



export const dashboardRoutes: Router = router;