import {Category, SubCategory} from '../Models/index';
import ICategory from '../Interfaces/Icategory';
import ISubCategory from '../Interfaces/ISubCategory';
export default class CategoriesService {
    public async listCategories () {
        try{
            const categoriesList = await Category.find({});
            return {
                categories: categoriesList
            };
        } catch(err){
            return err;
        }     
    }

    public async saveCategory (category: ICategory) {
        try{
            const createdCategory = await Category.create(category);
            return {
                category: createdCategory
            };
        } catch(err){
            return err;
        }  
    }
    public async findCategoryById (categoryId :any) {
        try{
            const category = await Category.findOne({ _id: categoryId });
            return {
                category: category
            };
        } catch(err){
            return err;
        }  
    }
    public async updateCategory(categoryId: any, category: any) {
        try{
            const updatedCategory = await Category.findByIdAndUpdate(categoryId, category,{new: true});
           // console.log("Here : ", updatedCategory)
            return {
                category: updatedCategory
            };
        } catch(err){
            return err;
        }          
    }

    public async deleCategory(categoryId: any) {
        try{
            const deletedCategory = await Category.remove({ _id: categoryId });
            return {
                isDeleted: true
            };
        } catch(err){
            return err;
        }          
    }

    /***************** Sub-category CRUD *******************************/
    public async saveSubCategory (subcategory: ISubCategory) {
        try{
            const createdSubCategory = await SubCategory.create(subcategory);
            return {
                category: createdSubCategory
            };
        } catch(err){
            return err;
        }  
    }

    public async findSubCategoryById (sucategoryId :any) {
        try{
            const subcategory = await SubCategory.findOne({ _id: sucategoryId });
            return {
                subcategory: subcategory
            };
        } catch(err){
            return err;
        }  
    }

    public async updateSubCategory(subcategory: any) {
        try{
            const updatedsubcategory = await SubCategory.findByIdAndUpdate(subcategory._id, subcategory);
            return {
                subcategory: updatedsubcategory
            };
        } catch(err){
            return err;
        }          
    }

    public async deleSubCategory(sucategoryId: any) {
        try{
            const deletedSubCategory = await SubCategory.remove({ _id: sucategoryId });
            return {
                isDeleted: true
            };
        } catch(err){
            return err;
        }          
    }
}