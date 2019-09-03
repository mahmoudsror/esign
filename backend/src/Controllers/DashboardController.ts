import { Request, Response } from "express";
import {dashboardService} from "../Services/index";
export default class DashboardController {

    public summaryStatistics =async (req: Request, res: Response)=> {
        try {
            const usersStatistics = await dashboardService.usersStatistics();
            const appointmentsStatstics = await dashboardService.appointmentsStatistics();            
            return res.status(200).json({
                status: 200,
                data: {
                    ...usersStatistics,
                    ...appointmentsStatstics
                }
            });
        } catch(err){
            return res.status(500).json({
                status: 500,
                data: {
                error: "internal server error"
                }
            });
        }
    }
}