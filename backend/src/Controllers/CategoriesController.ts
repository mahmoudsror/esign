import { Request, Response } from "express";
import { categoryService } from "../Services/index";
export default class CategoriesController {

    public list =async (req: Request, res: Response)=> {
        try {
            const categoriesList = await categoryService.listCategories();            
            return res.status(200).json({
                status: 200,
                data: {
                    ...categoriesList
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

    public create = async (req: Request, res: Response)=>{
        try {
            const createdCategory = await categoryService.saveCategory(req.body);            
            return res.status(200).json({
                status: 200,
                data: {
                    ...createdCategory
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

    public getCategoryById = async (req: Request, res: Response)=>{
        try {
            const category = await categoryService.findCategoryById(req.params.id);            
            return res.status(200).json({
                status: 200,
                data: {
                    ...category
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
    public update = async (req: Request, res: Response)=>{
        try {
            const updatedCategory = await categoryService.updateCategory( req.params.id,req.body );            
            return res.status(200).json({
                status: 200,
                data: {
                    ...updatedCategory
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

    public delete = async (req: Request, res: Response)=>{
        try {
            const deletedCategory = await categoryService.deleCategory(req.params.id);            
            return res.status(200).json({
                status: 200,
                data: {
                    ...deletedCategory
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