import mongoose , {Schema} from "mongoose";

const SubCategorySchema: Schema= new Schema({

    subCategoryName: {
        type: 'string'
    },
    subCategoryDescription: {
        type: 'string'
    }
},{
    collection:'subcategories'
});

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
export default SubCategory;