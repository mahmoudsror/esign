import { Patient, Consultant } from "../Models/index";
export default class UsersService {
    
    public async patientsCount (){
        try{
            const patientsCount = await Patient.find({}).count();
            return {
                patientsCount: patientsCount
            };
        } catch(err){
            return err;
        }  
    }

    public async consultantsCount (){
        try{
            const consultantsCount = await Consultant.find({}).count();
            return {
                consultantsCount: consultantsCount
            };
        } catch(err){
            return err;
        } 
    }

    public async listConsultants(){
        try{
            const consultants = await Consultant.find({});
            return consultants;
        } catch(err){
            return err;
        }
    }

    public async listPatients(){
        try{

            const patients = await Patient.find({});
            return patients;

        } catch(err){

            console.log("err : ", err)
            return err;

        }
    }

    public async getConsultantDetails(id: string){

        try{
            const consultantInfo = await Consultant.findOne({ _id: id });
            return consultantInfo;

        } catch(err){
            console.log("err : ", err)
            return err;
        }

    }

    public async activateConsultant (consultantId: string){
        try {
            const activatedConsultant = await Consultant.findByIdAndUpdate(consultantId, {active: true},{new: true});
            return activatedConsultant;
        } catch (error) {
            return error; 
        }

    }
    
    public async deactivateConsultant (consultantId: string){
        try {
            const deactivatedConsultant = await Consultant.findByIdAndUpdate(consultantId, {active: false},{new: true});
            return deactivatedConsultant;
        } catch (error) {
            return error; 
        }

    }
    
}