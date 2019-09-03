import mongoose , {Schema} from "mongoose";

const AppointmentSchema: Schema= new Schema({
    
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    consultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    details: {
        type: 'string'
    },
    category: {
        type: 'string'
    },
    sub_category: {
        type: 'string'
    },
    type: {
        type: 'string',
        allowNull: true,
        isIn: ['instant', 'scheduled']
    },
    start_time: {
        type: 'number',
        allowNull: true
    },
    end_time: {
        type: 'number',
        allowNull: true
    },
    duration: {
        type: 'number'
    },
    had_free_appointment: {
        type: 'boolean',
        defaultsTo: false
    },
    appointment_status: {
        type: 'string',
        isIn: ['is-free', 'un-paid', 'is-paid']
    },
    status: {
        type: 'string',
        isIn: ['pending', 'scheduled', 'on-going', 'completed']
    }
},{
    collection:'appointment'
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
export default Appointment;