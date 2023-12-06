import mongoose from 'mongoose';

const {Schema,model} = mongoose ;

const taskSchema = new Schema(
    {

        name : {
            type :String,
            required : true
        },
        desc : {
            type :String,
            required : true
        },
        dueTime : {
            type :Date,
            required : false
        },
    },
    {
        timestamps:true //Ajout auto createdAT and updatedAt
    }
    );
    
    export default model('Task',taskSchema);