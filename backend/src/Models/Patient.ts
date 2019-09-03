
import mongoose, { Schema } from "mongoose";

const PatientSchema: Schema = new Schema({
    profile_image: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    mobile: { type: 'string' },
    city: { type: 'string' },
    gender: { type: 'string', isIn: ['male', 'female'] },
    age: { type: 'number' },
    martial_status: { type: 'string' },
    player: { type: 'string' },
    deviceInfo:{ type:'Object' },
    had_free_appointment: { type: 'boolean', defaultsTo: false },
    iban: { type: 'string' },
    code: { type: 'number', allowNull: true },
    token: { type: 'string', allowNull: true },
    verified: { type: 'boolean', defaultsTo: false },
    active: { type: 'boolean', defaultsTo: true },
}, { collection: 'patient' });

const Patient = mongoose.model("Patient", PatientSchema);
export default Patient;