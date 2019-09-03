import mongoose , {Schema} from "mongoose";

const ConsultantSchema: Schema= new Schema({

    profile_image: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    mobile: { type: 'string' },
    gender: { type: 'string', isIn: ['male', 'female'] },
    age: { type: 'number' },
    degree: { type: 'string' },
    speciality: { type: 'string' },
    sub_speciality: { type: 'Object' },
    cost: { type: 'number' },
    rating: { type: 'number' },
    license: { type: 'string' },
    certificate: { type: 'string' },
    about_me: { type: 'string' },
    status: { type: 'string', isIn: ['green', 'orange', 'grey'], defaultsTo: 'green' },
    player: { type: 'string' },
    deviceToken: { type:'string'},
    token: { type:'string'},
    experience: { type: 'number' },
    is_account_setup_finished: { type: 'boolean', defaultsTo: false },
    is_available_for_instant: { type: 'boolean', defaultsTo: true },
    is_account_hidden: { type: 'boolean', defaultsTo: false },
    code: { type: 'number', allowNull: true },
    verified: { type: 'boolean', defaultsTo: false },
    active: { type: 'boolean', defaultsTo: false }
},{collection:'consultant'});
const Consultant = mongoose.model("Consultant", ConsultantSchema);
export default Consultant;