import {
    MaxLength,
    IsNotEmpty
} from "class-validator";
import ICategory from "../../Interfaces/Icategory";

export default class CategorySchema implements ICategory{


    @IsNotEmpty({
        message: "categoryName is required."
      })
      @MaxLength(20, {
        message: "categoryName must be shorter than or equal to $constraint1 characters."
    })
    public readonly categoryName: string;


    @IsNotEmpty({
        message: "categoryDescription is required."
      })
      @MaxLength(20, {
        message: "categoryDescription must be shorter than or equal to $constraint1 characters."
    })
    public readonly categoryDescription: string;
    constructor(category:ICategory){
        this.categoryName = category.categoryName,
        this.categoryDescription = category.categoryDescription
    }


}
