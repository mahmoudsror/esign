import { Request, Response } from "express";
import { feedbacksService } from "../Services/index";
export default class FeedbacksController {

    public list =async (req: Request, res: Response)=> {
        try {

            const feedbacksList = await feedbacksService.listAll();          
            return res.status(200).json({
                status: 200,
                data: {
                    ...feedbacksList
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