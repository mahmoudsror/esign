import { Request, Response } from "express";
import UsersService from "../Services/UsersService";
export default class UsersController {

    private usersService:any;

    constructor(){
        this.usersService= new UsersService();
    }
    public listConsultants=async (req: Request, res: Response)=>{
        try {
            
            const consultantsList = await this.usersService.listConsultants();
            
            return res.status(200).json({
                status: 200,
                data: consultantsList
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

    public  listPatinets= async (req: Request, res: Response)=> {
        try {

            const patientsList = await this.usersService.listPatients();
            return res.status(200).json({
                status: 200,
                data: patientsList
            });
        } catch(err){
            console.log("err :::: ", err)
            return res.status(500).json({
                status: 500,
                data: {
                error: "internal server error"
                }
            });
        }
    }

    public ConsultantDetails = async (req: Request, res: Response)=>{
        try {
            
            const consultantsList = await this.usersService.getConsultantDetails(req.params.id);
            
            return res.status(200).json({
                status: 200,
                data: consultantsList
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
    public activateConsultant = async (req: Request, res: Response)=>{
        
        try {
           const activatedConsultant = await this.usersService.activateConsultant(req.params.id);
            if(!activatedConsultant._id){
                return res.status(500).json({
                    status: 500,
                    data: {
                    error: "internal server error"
                    }
                });                
            }
           return res.status(200).json({
               status: 200,
               data: activatedConsultant
            });
        } catch (error) {
            console.log("err :::: ", error)
            return res.status(500).json({
                status: 500,
                data: {
                error: "internal server error"
                }
            });           
        }
    }

    public deactivateConsultant = async (req: Request, res: Response)=>{
        
        try {
           const deactivatedConsultant = await this.usersService.deactivateConsultant(req.params.id);
           if(!deactivatedConsultant._id){
            return res.status(500).json({
                status: 500,
                data: {
                error: "internal server error"
                }
            });                
        }
           return res.status(200).json({
               status: 200,
               data: deactivatedConsultant
            });
        } catch (error) {
            console.log("err :::: ", error)
            return res.status(500).json({
                status: 500,
                data: {
                error: "internal server error"
                }
            });           
        }
    }

}