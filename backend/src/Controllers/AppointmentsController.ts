import { Request, Response } from "express";
import { appointmentsService, dashboardService } from "../Services/index";
export default class AppointmentsController {

    public list =async (req: Request, res: Response)=> {
        try {

            const appointmentsList = await appointmentsService.listAll();          
            return res.status(200).json({
                status: 200,
                data: {
                    ...appointmentsList
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