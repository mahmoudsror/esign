import mongoose , {Schema} from "mongoose";

const CategorySchema: Schema= new Schema({

    categoryName: {
        type: 'string'
    },
    categoryDescription: {
        type: 'string'
    }
},{
    collection:'categories'
});

const Category = mongoose.model("Category", CategorySchema);
export default Category;