import {Transaction} from "../Models/index";
export default class TransactionsService {

    public async listAll (){
        try{
            
            const transactions = await Transaction
                                        .find({})
                                        .populate('consultant')
                                        .populate('patient')
                                        .populate('appointment');
            console.log(transactions)
            return {
                transactions: transactions
            };
        } catch(err){
            return err;
        }  
    }
}