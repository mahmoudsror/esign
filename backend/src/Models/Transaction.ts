import mongoose , {Schema} from "mongoose";

const TransactionsSchema: Schema= new Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    consultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    method: {
        type: 'string'
    },
    cost: {
        type: 'number'
    },
    discount: {
        type: 'number', defaultsTo: 0
    },
    total: {
        type: 'number'
    },
    is_paid: {
        type: 'boolean',
        defaultsTo: false
    },
    // coupon: {
    //     model: 'coupon'
    // },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }

},{
    collection:'payment'
});

const Transaction = mongoose.model("Transactions", TransactionsSchema);
export default Transaction;