import { Request, Response } from "express";
import { transactionsService } from "../Services/index";
export default class TransactionsController {

    public list =async (req: Request, res: Response)=> {
        try {

            const transactionsList = await transactionsService.listAll();          
            return res.status(200).json({
                status: 200,
                data: {
                    ...transactionsList
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