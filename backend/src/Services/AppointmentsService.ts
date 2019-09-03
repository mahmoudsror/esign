import {Appointment} from "../Models/index";
export default class AppointmentsService {
    
    public async appointmentsCount (){
        try{
            
            const appointmentsCount = await Appointment.find({}).count();
           // console.log(appointmentsCount)
            return {
                appointmentsCount: appointmentsCount
            };
        } catch(err){
            return err;
        }  
    }
    public async listAll (){
        try{
            
            const appointments = await Appointment.find({}).populate('consultant').populate('patient');
            //console.log(appointments)
            return {
                appointments: appointments
            };
        } catch(err){
            return err;
        }  
    }
}