import { usersService, appointmentsService } from './index';

export default class DashboardService {
    
    public async usersStatistics () {
        try{
            const { consultantsCount } = await usersService.consultantsCount();
            const { patientsCount } = await usersService.patientsCount();
            return {
                totalUsers: consultantsCount + patientsCount,
                consultantsCount: consultantsCount,
                patientsCount: patientsCount
            };
        } catch(err){
            return err;
        }  
    }

    public async appointmentsStatistics () {
        try{
            const { appointmentsCount } = await appointmentsService.appointmentsCount();
            return {
                appointmentsCount:appointmentsCount
            };
        } catch(err){
            return err;
        }
    }
}