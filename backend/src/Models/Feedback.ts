import mongoose , {Schema} from "mongoose";

const FeedbacksSchema: Schema= new Schema({

    rate: {
        type: 'number'
    },
    details: {
        type: 'string'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    consultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }

},{
    collection:'rate'
});

const Feedback = mongoose.model("Feedback", FeedbacksSchema);
export default Feedback;