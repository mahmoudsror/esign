import {Feedback} from "../Models/index";
export default class FeedbacksService {

    public async listAll (){
        try{
            
            const feedbacks = await Feedback
                                        .find({})
                                        .populate('consultant')
                                        .populate('patient')
                                        .populate('appointment');
            console.log(feedbacks)
            return {
                feedbacks: feedbacks
            };
        } catch(err){
            return err;
        }  
    }
}